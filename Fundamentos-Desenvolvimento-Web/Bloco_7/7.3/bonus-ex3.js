const assert = require('assert');
// escreva a função removeMiddle aqui
function removeMiddle(array) {
  if (array.length % 2 === 0) throw new Error('Nao tem valor do meio');
  const indexMeio = Math.ceil(array.length/2);
  const nwArray = [];
  nwArray.push(array[indexMeio-1]);
  array.splice(indexMeio-1, 1);
  return nwArray;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.strictEqual(typeof removeMiddle, 'function');

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
assert.throws(() => {
  removeMiddle(['teste','teste2']);
});
