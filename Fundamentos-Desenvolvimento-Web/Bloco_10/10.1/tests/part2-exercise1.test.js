const { encode, decode } = require('../part2-exercise1');
const { describe, test, expect } = require('@jest/globals');

describe('Testes para o exercicio 1 parte 2', () => {
  test('encode e decode sao funcoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('encode: aeiou vira 12345', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('decode: 12345  vira aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('encode: demais letras nao viram numeros', () => {
    expect(encode('xwqrtf')).toBe('xwqrtf');
  });

  test('decode: demais numeros nao viram letras', () => {
    expect(decode('06789')).toBe('06789');
  });

  test('o tamanho das frases permanece o mesmo', () => {
    expect((encode('alo, galera de peao')).length).toBe(('alo, galera de peao').length);
    expect((decode('3422')).length).toBe(('3422').length);
  });

  
});