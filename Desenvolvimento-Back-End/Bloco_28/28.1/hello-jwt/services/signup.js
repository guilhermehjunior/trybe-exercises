const Joi = require('joi');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const { JWT_SECRET } = process.env;

const schema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = async (username, password) => {
  const validation = schema.validate({ username, password });
  if(validation.error) return { error: { message: validation.error.details[0].message } };
  const randomNumber = Math.floor(Math.random() * 100);
  const newUser = { username, password, admin: randomNumber > 50 ? true : false };
  const users = JSON.parse(await fs.readFile('./models/data/users.json', 'utf-8'));
  if(users.find((user) => user.username === username)) return { error: { message: 'user already exists' } };
  users.push(newUser);
  await fs.writeFile('./models/data/users.json', JSON.stringify(users));
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({data: { username, admin: newUser.admin } }, JWT_SECRET, jwtConfig);

  return { token };
};