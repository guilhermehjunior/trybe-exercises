const connection = require('./connection');

const getCepByCep = (cep) => {
  const [cepEncontrado] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  if (cepEncontrado.length === 0) return null;
  return cepEncontrado;
};

module.exports = {
  getCepByCep,
};
