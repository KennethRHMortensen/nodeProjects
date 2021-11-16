// Alt syntax er taget direkte fra Niels hjemmeside eksempel på en node server


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');   // no encoding
  res.end('Hello World!\nBlåbærgrød\n');
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});