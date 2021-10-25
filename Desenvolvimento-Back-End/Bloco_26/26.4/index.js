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

// 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  res.status(401).json({ message: 'Unauthorized' });
});

// 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome e ${name} e voce tem ${age} anos de idade!` })
});

app.listen(3000, () => {
  console.log('Rodando aplicacao na porta 3000');
});