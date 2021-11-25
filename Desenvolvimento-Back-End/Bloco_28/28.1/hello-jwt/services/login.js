const Joi = require('joi');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const { JWT_SECRET } = process.env;

const schema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});
const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
}

module.exports = async (username, password) => {
  const validation = schema.validate({ username, password });
  if(validation.error) return { error: { message: validation.error.details[0].message } };
  const users = JSON.parse(await fs.readFile('./models/data/users.json', 'utf-8'));
  const loginUser = users.find((user) => (user.username === username && user.password === password));
  let token;
  if (username === 'admin' && password === 's3nh4S3gur4???') return { error: { message: 'authentification invalid' } };
  else token = jwt.sign({data: { username, admin: loginUser.admin } }, JWT_SECRET, jwtConfig);

  return { token };
};