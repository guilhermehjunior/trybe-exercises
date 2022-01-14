const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./controllers/book');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/book', bookRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
});
