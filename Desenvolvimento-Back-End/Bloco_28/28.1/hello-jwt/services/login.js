const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = 'umasenhadificil';

const schema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = (username, password) => {
  const validation = schema.validate({ username, password });
  if(validation.error) return { error: { message: validation.error.details[0].message } };
  const jwtConfig = {
    expiresIn:'1h',
    algorithm: 'HS256',
  }
  let token;
  if (username === 'admin' && password === 's3nh4S3gur4???') token = jwt.sign({data: { username, admin: true } }, secret, jwtConfig);
  else token = token = jwt.sign({data: { username, admin: false } }, secret, jwtConfig);

  return { token };
};