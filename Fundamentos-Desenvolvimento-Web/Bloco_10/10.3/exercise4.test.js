const exercises = require('./exercise4');
const { describe, test, expect } = require('@jest/globals');
jest.mock('./exercise4');

afterEach(() => {
  exercises.stringToUpperCase.mockReset();
  exercises.firstLetterString.mockReset();
  exercises.concatStrings.mockReset();
})

describe('Exercicio 4 realizado para o dia 10.3', () => {
  test('Mudando a primeira funcao do ex4', () => {
    exercises.stringToUpperCase.mockImplementation((string) => string.toLowerCase());

    expect(exercises.stringToUpperCase('ALO')).toBe('alo');
    expect(exercises.stringToUpperCase).toHaveBeenCalled();
    expect(exercises.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(exercises.stringToUpperCase).toHaveBeenCalledWith('ALO');
  });

  test('Mudando a segunda funcao do ex4', () => {
    exercises.firstLetterString.mockImplementation((string) => {
      const letters = string.split('');
      return letters[letters.length - 1];
    });

    expect(exercises.firstLetterString('alo')).toBe('o');
    expect(exercises.firstLetterString).toHaveBeenCalled();
    expect(exercises.firstLetterString).toHaveBeenCalledTimes(1);
    expect(exercises.firstLetterString).toHaveBeenCalledWith('alo');
  });

  test('Mudando a terceira funcao do ex4', () => {
    exercises.concatStrings.mockImplementation((string1, string2, string3) => `${string1}${string2}${string3}`);

    expect(exercises.concatStrings('alo','galera', 'depeao')).toBe('alogaleradepeao');
    expect(exercises.concatStrings).toHaveBeenCalled();
    expect(exercises.concatStrings).toHaveBeenCalledTimes(1);
    expect(exercises.concatStrings).toHaveBeenCalledWith('alo', 'galera', 'depeao');
  });
});

