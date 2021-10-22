const fs = require('fs');

function numberSignal(number) {
  if (typeof number !== 'number') return 'o valor deve ser um número';
  if (number < 0) return 'Negativo';
  if (number === 0) return 'Neutro';
  return 'Positivo'
}

function writingFile(file, content) {
  try {
    const response = fs.writeFileSync(file, content);
    return response;
  } catch(e) {
    return null;
  }
}

module.exports = { numberSignal , writingFile };