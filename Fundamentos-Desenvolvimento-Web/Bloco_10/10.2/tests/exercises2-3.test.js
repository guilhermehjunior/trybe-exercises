const getUserName = require('../exercise2-3');
const { describe, it, expect } = require('@jest/globals');

describe('Testes para o Exercicio 2', () => {
  it('Funcionario encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });

  it('Funcionario nao encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    });
  });
});

describe('Tests para o Exercicio 3', () => {
  it('Funcionario encontrado - Async/Await', async () => {
    expect.assertions(1);
    const nomeUsuario = await getUserName(4);
    expect(nomeUsuario).toBe('Mark');
  });

  it('Funcionario nao encontrado - Async/Await', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error){
      expect(error).toEqual({ error: 'User with 3 not found.' })
    }
  });
});