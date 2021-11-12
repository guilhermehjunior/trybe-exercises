const connection = require('./connection');

const getCepByCep = async (cep) => {
  const [cepEncontrado] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return cepEncontrado;
};

module.exports = {
  getCepByCep,
};
