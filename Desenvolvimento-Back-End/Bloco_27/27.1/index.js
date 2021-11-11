const express = require('express');
const bodyParser = require('body-parser');
const { isValid, postUser, getUsers } = require('./models/User');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/user', async(req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!isValid({ firstName, lastName, email, password })) {
      return res.status(401).json({ message: 'Dados invalidos'});
    }
    const user = await postUser(firstName, lastName, email, password);
    res.status(201).json(user);
  } catch (err){
    next(err);
  }
  
});

app.get('/user', async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(201).json(users);
  } catch (err) {
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