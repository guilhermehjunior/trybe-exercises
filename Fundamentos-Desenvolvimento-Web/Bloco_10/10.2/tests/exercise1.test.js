const uppercase = require ('../exercise1');
const { describe, it, expect } = require('@jest/globals');

describe('Teste para o exercicio 1', () => {
  it('testa se todas as letras sao maiusculas', (done) => {
    uppercase('alo galera de peao', (string) => {
      expect(string).toBe('ALO GALERA DE PEAO');
      done();
    })
  });
});