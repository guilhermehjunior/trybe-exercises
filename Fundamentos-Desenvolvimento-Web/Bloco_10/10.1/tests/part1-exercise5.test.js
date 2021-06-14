const { obj1, obj2, obj3 } = require('../part1-exercise5');


describe('Testes exercicio 5', () => {
  it('verifica se objetos sao iguais', () => {
    expect(obj1).toEqual(obj2);
  });

  it('verifica se objetos nao sao iguais', () => {
    expect(obj1).not.toEqual(obj3);
  });
});