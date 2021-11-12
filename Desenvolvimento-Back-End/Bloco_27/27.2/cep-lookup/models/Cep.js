const connection = require('./connection');

const getCepByCep = async (cep) => {
  const [cepEncontrado] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return cepEncontrado;
};

const postCep = async (objeto) => {
  const { cep, logradouro, bairro, localidade, uf } = objeto;
  await connection().execute('INSERT INTO ceps VALUES(?, ?, ?, ?, ?)', [cep, logradouro, bairro, localidade, uf]);
  return objeto;
};

module.exports = {
  getCepByCep,
  postCep,
};
