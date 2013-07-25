var {Application} = require("stick");
var app = exports.app = Application();
app.configure("static", "etag", masterTemplate, "mount");
app.mount("", require("simplesite"));
app.static(module.resolve('./static'), "index.html", '/static/');

var masterTemplatePath = module.resolve("templates/master.html");
function masterTemplate(next, app) {
    return function(req) {
        req.env.masterTemplate = masterTemplatePath;
        return next(req);
    }
}

var init = exports.init = function() {
    var server = new require("ringo/httpserver").Server({app: app, port:8080});
    server.start();
}

if (require.main === module) {
   init();
}
