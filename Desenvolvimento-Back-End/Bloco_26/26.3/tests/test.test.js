const { expect } = require('chai');
const numberSignal = require('../index');

describe('testes funcao para identificar sinal de numeros', () => {
  it('O numero eh positivo', () => {
    const result = numberSignal(1);
    expect(result).to.be.equal('Positivo');
  });

  it('O numero eh negativo', () => {
    const result = numberSignal(-2);
    expect(result).to.be.equal('Negativo');
  });
  
  it('O numero eh neutro', () => {
    const result = numberSignal(0);
    expect(result).to.be.equal('Neutro');
  });
});