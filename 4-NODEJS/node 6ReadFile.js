//NODE JS FILE SYSTEM
//HOW TO READ THE FILE
var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';                      //domain name given to device
const port = 3000;
http.createServer(function (req, res) {
    fs.readFile('sample.txt', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);                         //writes data on the screen
        return res.end();
    })
}).listen(port, hostname, () => {               //start the server to listen the encrypted connection
    console.log(`Server running at http://${hostname}:${port}/`);
});