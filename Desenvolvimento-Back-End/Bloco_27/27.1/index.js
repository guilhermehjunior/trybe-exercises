const express = require('express');
const bodyParser = require('body-parser');
const { isValid, postUser, getUsers, getUserById } = require('./models/User');

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

app.get('/user/:id', async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    user ? res.status(200).json(user)
        : res.status(400).json({
            "error": true,
            "message": "Usuário não encontrado"
          });
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