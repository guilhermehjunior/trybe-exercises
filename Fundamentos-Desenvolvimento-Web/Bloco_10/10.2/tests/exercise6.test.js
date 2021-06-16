const {getAnimal, getAnimalbyAge} = require('../exercise6');
const { describe, test, expect } = require('@jest/globals');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando Promise - getAnimalByAge', () => {
  test('Quando existe animal com a idade procurada', async () => {
    expect.assertions(1);
    const animais = await getAnimalbyAge(5);
    expect(animais[0]).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
    //return expect(getAnimalbyAge(5)).resolves.toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
  });

  test('quando nao existe animal com a idade procurada', async () => {
    expect.assertions(1);
    return expect(getAnimalbyAge(7)).rejects.toBe('Nenhum animal com essa idade!');
  });
});