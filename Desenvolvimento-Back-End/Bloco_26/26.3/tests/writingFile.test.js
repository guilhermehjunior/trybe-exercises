const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

describe('Testes para funcao de escrever texto em um arquivo', () => {
  describe('Verifica se o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync')
        .returns('ok');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });
    it('Verifica se a resposta foi a esperada', () => {
      const result = writingFile('file1.txt', 'Welcome to the jungle');
      expect(result).to.be.equals('ok');
    });
  });

  describe('Verifica se o arquivo nao existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync')
        .throws(new Error('Arquivo nao encontrado'));
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    it('Verifica se o retorno eh o esperado', () => {
      const result = writingFile('xablau.txt', 'Welcome to the jungle');
      expect(result).to.be.null;
    });
  });
});