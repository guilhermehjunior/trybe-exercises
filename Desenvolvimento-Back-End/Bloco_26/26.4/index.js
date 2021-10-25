const express = require('express');

const app = express();

// 1
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('Rodando aplicacao na porta 3000');
});