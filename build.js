var {Parser} = require("ringo/args");
var system = require('system');
var fs = require("fs");
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
   var masterContent = fs.read(module.resolve('./templates/master.html'));
   if (!opts.outputdir) {
      opts.outputdir = module.resolve('./virtuejs')
   }
   traverse(opts.contentdir);
   fs.copyTree(module.resolve('./static'), fs.join(opts.outputdir, 'static/'));
}