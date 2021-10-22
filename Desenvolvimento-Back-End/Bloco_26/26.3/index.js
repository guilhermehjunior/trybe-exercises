function numberSignal(number) {
  if (typeof number !== 'number') return 'o valor deve ser um número';
  if (number < 0) return 'Negativo';
  if (number === 0) return 'Neutro';
  return 'Positivo'
}

module.exports = {numberSignal};