var http = require('http');
var router = require('./pathHandler.js');


http.createServer(writeContent).listen(8888);
console.log('Server has started');

function writeContent(req, res) {
    content = router.getContent(req.url);
    res.writeHead(200);
    res.write(content);
    res.end();
}
