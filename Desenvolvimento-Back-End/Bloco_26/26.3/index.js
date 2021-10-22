function numberSignal(number) {
  if (number < 0) return 'Negativo';
  if (number === 0) return 'Neutro';
  return 'Positivo'
}

module.exports = numberSignal;