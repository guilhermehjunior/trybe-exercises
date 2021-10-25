const express = require('express');
const bodyParser = require('body-parser');
const readSimpsons = require('./simpsonsUtils');

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

// 5 e 6
app.get('/simpsons', async (req, res) => {
  res.status(200).json(await readSimpsons());
});

// 7
app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpson = JSON.parse(simpsons).find((simpson) => parseInt(simpson.id, 10) === parseInt(id,10));
  if (!simpson) return res.status(404)
});

app.listen(3000, () => {
  console.log('Rodando aplicacao na porta 3000');
});