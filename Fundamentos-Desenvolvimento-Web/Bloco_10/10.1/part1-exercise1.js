const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('It is not a number');
  }
  return a + b;
} 

module.exports = sum;