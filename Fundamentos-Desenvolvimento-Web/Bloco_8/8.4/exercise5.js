const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((somaLetraA, nome) => 
    somaLetraA + nome.split('').reduce((soma, letra) => 
    (letra === 'a' || letra === 'A') ? soma += 1 : soma, 0)
    // });, 0);
    // nome.split('').forEach((letra) => {
    //   (letra === 'a' || letra === 'A') ? somaLetraA += 1 : somaLetraA;
    // });
    // return somaLetraA;
    // for(let letra = 0; letra < nome.length; letra += 1) {
    //   (nome[letra] === 'a' || nome[letra] === 'A') ? somaLetraA += 1 : somaLetraA;
    // }
    // return somaLetraA;
  , 0);
}

assert.deepStrictEqual(containsA(), 20);