const { expect } = require('chai');

describe('testes funcao para identificar sinal de numeros', () => {
  it('O numero eh positivo', () => {
    const result = numberSign(1);
    expect(result).to.be.equal('Positivo');
  });

  it('O numero eh negativo', () => {
    const result = numberSign(-2);
    expect(result).to.be.equal('Negativo');
  });
  
  it('O numero eh neutro', () => {
    const result = numberSign(0);
    expect(result).to.be.equal('Neutro');
  });
});