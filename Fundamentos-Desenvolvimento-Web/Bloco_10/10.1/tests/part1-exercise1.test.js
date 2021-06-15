const sum = require('../part1-exercise1');
const { test, expect } = require('@jest/globals');

test('Testando as somas', () => {
  expect(sum(4,5)).toBe(9); 
  expect(sum(0,0)).toBe(0);
});

test('Testing if it is a number', () => {
  expect(() => sum(4, '5')).toThrow();
  expect(() => sum(4, '5')).toThrowError('It is not a number');
});