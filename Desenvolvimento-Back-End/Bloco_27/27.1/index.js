const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/user', async(req, res) => {
  const { firstNAme, lastName, email, password } = req.body;
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});