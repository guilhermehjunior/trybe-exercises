const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(express.static(__dirname + '/public'));

require('./sockets/feed')(io);

http.listen(3000, () => {
  console.log('Aplicativo online na porta 3000');
});
