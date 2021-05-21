const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = (array) => {
  const nwArray = [];
  for (const word of array) {
    nwArray.push(word.length);
  }
  return nwArray;
};


assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);