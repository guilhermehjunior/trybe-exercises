const mysql = require('mysql2/promise');

let db = null;

const connection = () => {
  return db
  ? Promise.resolve(db)
  : mysql.createPool({
    host: 'localhost',
    user: 'guitrybe',
    password: 'nope',
    database: 'cep_lookup'
  });
};

module.exports = connection;
