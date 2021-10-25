const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// 1
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log('Rodando aplicacao na porta 3000');
});