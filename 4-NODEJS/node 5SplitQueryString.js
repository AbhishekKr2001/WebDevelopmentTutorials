//SPLIT QUERY STRING
var http = require('http');
var url = require('url');


const hostname = '127.0.0.1';//domain name given to device
const port = 3000;
http.createServer(function (req, res) {
    res.statuscode = 204;
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;                     //http://localhost:3000/?year=2017&month=July
    res.end(txt);
}).listen(port, hostname, () => {//start the server to listen the encrypted connection
    console.log(`Server running at http://${hostname}:${port}/`);
});