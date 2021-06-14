const sum = require('../part1-exercise1');

test('Testando as somas', () => {
  expect(sum(4,5)).toBe(9); 
  expect(sum(0,0)).toBe(0);
});

test('Testing if it is a number', () => {
  expect(() => sum(4, '5')).toThrow();
  expect(() => sum(4, '5')).toThrowError(new Error('It is not a number'));
});