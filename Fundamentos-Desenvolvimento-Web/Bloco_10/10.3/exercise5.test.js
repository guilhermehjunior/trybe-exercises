const exercises = require('./exercise4');
const { describe, test, expect } = require('@jest/globals');

// usa as mesmas funcoes do EX4

describe('Exercicio 5 realizado para o dia 10.3', () => {
  test('Mudando a primeira funcao e resetando ela', () => {
   const upperCaseString = jest
   .spyOn(exercises, 'stringToUpperCase')
   .mockImplementation((string) => string.toLowerCase());

    expect(upperCaseString('ALO')).toBe('alo');
    expect(upperCaseString).toHaveBeenCalled();
    expect(upperCaseString).toHaveBeenCalledTimes(1);
    expect(upperCaseString).toHaveBeenCalledWith('ALO');

    exercises.stringToUpperCase.mockRestore();
    // exercises.stringToUpperCase.mockImplementation((string) => string.toUpperCase());

    expect(exercises.stringToUpperCase('alo')).toBe('ALO');
    // expect(exercises.stringToUpperCase).toHaveBeenCalled();
    // com restore ele nem e mais mockado
  });
})