const myRemove = require('../part1-exercise2');

const novoArray = [1, 2, 3, 4, 5];

describe('Testes para o exercicios 2', () => {
  test('Verificar se a funcao funciona', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verificar se a funcao funciona 2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se o array inicial permanece o mesmo', () => {
    myRemove(novoArray, 4);
    expect(novoArray).toEqual([1, 2, 3, 4, 5]);
  })

  test('Verificar se a funcao funciona 3', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});