const myRemoveWithoutCopy = require('./part1-exercise3');

const novoArray = [1, 2, 3, 4, 5];

describe('Testes para o exercicios 3', () => {
  test('Verificar se a funcao funciona', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verificar se a funcao funciona 2', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se o array inicial permanece o mesmo', () => {
    myRemoveWithoutCopy(novoArray, 4);
    expect(novoArray).toEqual([1, 2, 3, 5]);
  })

  test('Verificar se a funcao funciona 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});