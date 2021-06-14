const { professionalBoard, searchEmployee } = require('../bonus');
const { describe, test, expect } = require('@jest/globals');

describe('Testes realizados para o requisito bonus', () => {
  test('Verifica se searchEmployee e uma funcao', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Id do funcionario nao encontrado', () => {
    expect(searchEmployee('7777-7', 'firstName')).toBe('ID não identificada');
  });

  test('Informacao do funcionario nao encontrada', () => {
    expect(searchEmployee('8579-6', 'xablau')).toBe('Informação indisponível');
  });

  test('Funcionario e informacaos encontrados', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual({id:'9852-2-2', firstName: 'Jeff',});
    expect(searchEmployee('5569-4', 'specialities')).toEqual({id: '5569-4', specialities:['Frontend', 'Redux', 'React', 'CSS']});
  });
});