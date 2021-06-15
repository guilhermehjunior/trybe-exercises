function techList(tecnologias, name) {
  if (tecnologias.length === 0) return 'Vazio!';
  const lista = tecnologias.sort().map((tech) => ({
    tech,
    name,
  }));
  return lista;
}

module.exports = techList;