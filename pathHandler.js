var url = require('url');
var fs = require('fs');
module.exports.getContent = getContent;

function getContent(req_url) {
    var pathname = url.parse(req_url).pathname;
    if(pathname == "/") {
        return fs.readFileSync("index.html", "utf8");
    } else if (pathname == "/index.js") {
        return fs.readFileSync("index.js", "utf8");
    }

}
