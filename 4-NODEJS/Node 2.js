const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colors in CSS</title>
      <style>
          #first{
              color: blue;
          }
          #second,#third{
              color: cadetblue;
          }
      </style>
  </head>
  <body>
      <h4>this is CSS Colors</h4>
      <p id=first"">this is first oaragraph</p>
      <p id="second">this is second paragraph</p>
      <p id="third">this is third paragraph</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




