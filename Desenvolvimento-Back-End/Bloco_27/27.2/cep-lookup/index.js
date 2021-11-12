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

app.post('/cep', Cep.postCep);

app.use((err, _req, res, next) => {
  console.log(err.message);
  res.status(500).end();
})

app.listen(PORT, () => {
  console.log(`ON PORT ${PORT}`);
});
