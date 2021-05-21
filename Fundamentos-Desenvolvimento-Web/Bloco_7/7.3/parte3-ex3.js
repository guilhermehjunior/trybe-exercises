const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);

const parameter2 = [-4, 11, 32, 9, 21, -11, 100];
const result2 = [11, 32, 21, 100];

assert.deepStrictEqual(greaterThanTen(parameter2), result2);

