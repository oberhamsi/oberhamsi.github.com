var {Parser} = require("ringo/args");
var system = require('system');
var fs = require("fs");
var {command} = require('ringo/subprocess');
var mustache = require('ringo/mustache');
var markdown = require('ringo/markdown');


var parser = new Parser();
parser.addOption("c", "contentdir", "contentdir", "Path to content directory");
parser.addOption("o", "outputdir", "outputdir", "Write .html files into this directory");
parser.addOption("b", "baseuri", "baseuri", "Base URI prepended to all links");


function renderMarkdown(file) {
    return markdown.process(fs.read(file), {
        getLink: function(id) {
            var link = this.super$getLink(id);
            if (link === null) {
              // mediawiki syntax
              // [[Link]]
              // [[name | link]]
              if (id.substring(0,1) === '[' && id.substring(id.length-1) === ']') {
                var idNoBrackets = id.substring(1,id.length-1);
                var pipeParts = idNoBrackets.split('|');
                if (pipeParts.length === 2) {
                  return [pipeParts[1] + '.html', pipeParts[0]];
                }
                return [idNoBrackets + '.html', 'idNoBrackets'];
              }
            }
            return link || ["/wiki/" + id.replace(/\s/g, "_"), "wiki link"];
        },
        openTag: function(tag, buffer) {
            buffer.append('<').append(tag);
            if (tag == "pre") {
                buffer.append(' class="sh_javascript"');
            }
            buffer.append('>');
        }
    });
}

var buildFile = function(path) {
   if (fs.isLink(path)) {
      traverse(path + '/');
      return;
   } else if (fs.isDirectory(path)) {
      return;
   }
   var context = {
      content: renderMarkdown(path),
      baseUri: opts.baseuri || '/'
   };
   var html = mustache.to_html(masterContent, context);
   var relativePath = fs.relative(opts.contentdir, path);
   relativePath = relativePath.slice(0, -3) + '.html';
   var outPath = fs.join(opts.outputdir, relativePath);
   fs.makeTree(fs.directory(outPath));
   fs.write(outPath, html);
}

var traverse = function(path) {
   fs.listTree(path).forEach(function(relPath) {
      buildFile(fs.join(path, relPath));
   });
}


if (require.main === module) {
   var opts = parser.parse(system.args.slice(1));
   var masterTemplatePath = module.resolve('./templates/master.html');
   var masterContent = fs.read(masterTemplatePath);
   if (!opts.outputdir) {
      opts.outputdir = module.resolve('./virtuejs')
   }
   traverse(opts.contentdir);
   fs.copyTree(module.resolve('./static'), fs.join(opts.outputdir, 'static/'));
   var stickDestination = fs.join(opts.outputdir, 'stick');
   fs.removeTree(stickDestination)
   var renderStickApi = "ringo " + module.resolve('./jsdoc/main.js') + " --template " + masterTemplatePath +
    ' --baseuri ' + opts.baseuri + 
    ' -s external/stick/lib/ -d ' + stickDestination +
    ' -p external/stick/package.json ' +
    ' -n "Stick API" ';
    
   print (renderStickApi)
   var ret = command(renderStickApi);
   print (ret)
}