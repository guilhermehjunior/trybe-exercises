
const myFizzBuzz = require('../part1-exercise4');

describe('Testes para o Exercicio 4', () => {
  it('Verifica se o retorno e fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se o retorno e fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('Verifica se o retorno e Buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verifica se o retorno e o numero', () => {
    expect(myFizzBuzz(16)).toBe(16);
  });

  it('Verifica se o retorno e fizzBuzz', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});