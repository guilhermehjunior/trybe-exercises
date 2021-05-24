const assert = require('assert');

const greetPeople = (people) => {
  let nwArray = [];
  let greeting = 'Hello ';

  for (const person in people) {
    nwArray.push(greeting + people[person]);
  }
  return nwArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);

const parameter2 = ['Alex', 'Carlos', 'Sylvia'];
const result2 = ['Hello Alex', 'Hello Carlos', 'Hello Sylvia'];
assert.deepStrictEqual(greetPeople(parameter2), result2);