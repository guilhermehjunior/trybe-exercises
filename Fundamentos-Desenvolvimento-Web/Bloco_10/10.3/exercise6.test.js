const exercise6 = require('./exercise6');
const { describe, test, expect } = require('@jest/globals');

describe('Teste realizado para o Ex6, Mockando a funcao fetch', () => {
  exercise6.fetchingDogPic = jest.fn();
  afterEach(() => {
    exercise6.fetchingDogPic.mockReset();
  });
  
  test('resolvendo a requisicao do API', () => {
    exercise6.fetchingDogPic.mockResolvedValue('request sucess');

    expect(exercise6.fetchingDogPic()).resolves.toBe('request sucess');
    expect(exercise6.fetchingDogPic).toHaveBeenCalled();
    expect(exercise6.fetchingDogPic).toHaveBeenCalledTimes(1);

  });

  test('rejeitando a requisicao do API', () => {
    exercise6.fetchingDogPic.mockRejectedValue('request failed');

    expect(exercise6.fetchingDogPic).toHaveBeenCalledTimes(0);
    expect(exercise6.fetchingDogPic()).resolves.toBe('request failed');
    expect(exercise6.fetchingDogPic).toHaveBeenCalled();
    expect(exercise6.fetchingDogPic).toHaveBeenCalledTimes(1);
  });
});