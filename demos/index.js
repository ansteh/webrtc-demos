const express = require('express');
const app = express();

const port = '3000';

app.use(require('./local-stream'));

const server = require('http').Server(app);

server.listen(port, () => {
  console.log(`WebRTC demo server started on *:${port}`);
});
