const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let numVogais = 1;
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(numVogais);
      numVogais += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);

const parameter2 = 'MuitasVogais';
const result2 = 'M12t3sV4g56s';

assert.strictEqual(removeVowels(parameter2), result2);