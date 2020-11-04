/*1-  npm init --yes  for package.json yes is for default config
  2-  npm i express
*/
const express = require('express');

const server = express();

server.get('/',(req, res) => {
  res.send('Hello Express');
});

server.get('/about',(req, res) => {
  res.send('about...');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
