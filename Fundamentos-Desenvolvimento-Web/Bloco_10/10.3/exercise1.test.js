const exercises = require('./exercise1');
const { describe, test, expect } = require('@jest/globals');


describe('Exercicios realizados no dia 10.3', () => {
  test('Teste realizado para ex 1', () => {
    exercises.randomNumber = jest
    .fn()
    .mockReturnValue(10);
  
    exercises.randomNumber();
    expect(exercises.randomNumber).toHaveBeenCalled();
    expect(exercises.randomNumber()).toBe(10);
    expect(exercises.randomNumber).toHaveBeenCalledTimes(2);
  });
  
  test('Teste realizado para ex 2', () => {
    exercises.randomNumber = jest
    .fn()
    .mockImplementation((a, b) => a / b);
  
    expect(exercises.randomNumber(10,2)).toBe(5);
    expect(exercises.randomNumber).toHaveBeenCalled();
    expect(exercises.randomNumber).toHaveBeenCalledWith(10,2);
    expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('Teste realizado para o ex 3', () => {
    exercises.randomNumber = jest
    .fn()
    .mockImplementation((a, b, c) => a * b * c);

    expect(exercises.randomNumber(10,2,3)).toBe(60);
    expect(exercises.randomNumber).toHaveBeenCalled();
    expect(exercises.randomNumber).toHaveBeenCalledWith(10,2,3);
    expect(exercises.randomNumber).toHaveBeenCalledTimes(1);

    exercises.randomNumber.mockReset();
    exercises.randomNumber.mockImplementation((a) => 2 * a);

    expect(exercises.randomNumber(10)).toBe(20);
    expect(exercises.randomNumber).toHaveBeenCalled();
    expect(exercises.randomNumber).toHaveBeenCalledWith(10);
    expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
  });
});
