const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/user', async(req, res, next) => {
  try {
    const { firstNAme, lastName, email, password } = req.body;
  } catch (err){
    next(err);
  }
  
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).end();
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});