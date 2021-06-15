function hydrate(frase) {
  const fraseSeparada = frase.split('');
  const regex = /[0-9]/;
  const totalCoposAgua = fraseSeparada.reduce((soma, letraAtual) => {
    if (regex.test(letraAtual)) {
      return soma + Number(letraAtual);
    }
    return soma;
  }, 0)
  if (totalCoposAgua === 1) return `${totalCoposAgua} copo de água`;
  return `${totalCoposAgua} copos de água`;
}

module.exports = hydrate;