const http = require('http');

const requestListener=((req, res) => {
  res.write('Hello World\n');
  res.end();
});

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
////////////////////////////////////////////

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
