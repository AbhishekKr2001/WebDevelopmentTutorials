//SERVE HTML FILES AS PER REQUEST
var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 not found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data);
        console.log('website is running')
        return res.end();
    });
}).listen(3000);