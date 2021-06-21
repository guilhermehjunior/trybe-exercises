const a = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

const { fetchJoke } = require('./bonus');
const { describe, test, expect } = require('@jest/globals');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('Teste para o Ex Bonus', () => {
  test('mockando o fetch', async () => {
    fetch.mockImplementation(async (url, headers) => {
      return {
        json: async () => a,
      }
    });

    const piada = await fetchJoke();
    expect(piada).toBe('Whiteboards ... are remarkable.');
    expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
    

  });
});