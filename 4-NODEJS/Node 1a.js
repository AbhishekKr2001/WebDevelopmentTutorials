const http = require('http');                       //allows user to communicate data on www

const hostname = '127.0.0.1';                      //domain name given to device
const port = 3000;                                 //communication end points

const server = http.createServer((req, res) => {   //store, process and deliver web pages
  res.statusCode = 200;                            //issued by server if page has been found or not
  res.setHeader('Content-Type', 'text/plain');     //res.writeHead(200,{'Content-Type','text/html'})
  res.end('Hello World');                          // the data with which the user wants to end the response.
});

server.listen(port, hostname, () => {               //start the server to listen the encrypted connection
  console.log(`Server running at http://${hostname}:${port}/`);
});