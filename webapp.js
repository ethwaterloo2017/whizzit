var http = require('http');
var fs = require('fs');

fs.readFile("index.html", function(err, content) {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.write(content);
        res.end();
    }).listen(8888);
});
console.log('Server has started');


