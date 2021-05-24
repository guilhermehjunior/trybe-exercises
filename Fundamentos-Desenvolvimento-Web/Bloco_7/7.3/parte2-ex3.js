const assert = require('assert');
// escreva a função sumAllNumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;

const sumAllNumbers = (array) => {
  let sum = 0;
  for (let num of array) {
    if (typeof num !== 'number') throw new Error('Existem valores diferentes de numeros');
    sum += num;
  }
  return sum;
};
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
assert.throws(()=> {
  sumAllNumbers(['calor',3,3]);
});