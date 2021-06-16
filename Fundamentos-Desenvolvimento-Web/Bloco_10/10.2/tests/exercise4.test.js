const getRepos = require('../exercise4');
const { describe, it, expect } = require('@jest/globals');

describe('Testes para o exercicio 4', () => {
  it('Verifica se os repositorios estao na URL', async () => {
    const API_URL = 'https://api.github.com/orgs/tryber/repos';
    expect.assertions(2);
    const repositorios = await getRepos(API_URL);
    expect(repositorios.includes('sd-01-week4-5-project-todo-list')).toBeTruthy();
    expect(repositorios.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy();
  })
})