const express = require('express');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);

app.use(cors());

app.use(express.static(__dirname + '/public'));

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (_req,res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, () => {
  console.log('Aplicativo online na porta 3000');
});
