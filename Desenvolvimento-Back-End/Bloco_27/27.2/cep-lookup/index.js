const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/Cep');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.get('/cep/:cep', Cep.getCepByCep);

app.listen(PORT, () => {
  console.log(`ON PORT ${PORT}`);
});
