const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort((x, y) => x - y);
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);

const parameter2 = [44, 0, 2, -9, 24, 30, 8, 11, 15, 6];
const result2 = [0, 2];

assert.deepStrictEqual(secondThirdSmallest(parameter2), result2);

