const connection = require('./connection');

const isValid = ({ firstName, lastName, email, password }) => {
  if (!firstName) return false;
  if (!lastName) return false;
  if (!email) return false;
  if (!password || password.length < 6 || typeof password !== 'string') return false;
  return true;
};

const postUser = async (firstName, lastName, email, password) => {
  const db = await connection();
  const result = await db.collection('user').insertOne({
    firstName,
    lastName,
    email,
    password,
  });
  const user = {
    id: result.insertedId,
    firstName,
    lastName,
    email,
  }
  return user;
};

module.exports = {
  isValid,
  postUser,
};
