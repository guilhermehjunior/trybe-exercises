# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

def retiraLetrasDoNomePorLinha(word):
    index = 0
    while index < len(word):
        for letter in range(len(word) - index):
            print(word[letter], end="")
        print()
        index += 1


if __name__ == "__main__":
    name = input("Digite um nome: ")
    retiraLetrasDoNomePorLinha(name)

# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.


import random
words = []
with open('palavras.txt', 'r') as file:
    words = file.read().split()


def random_word(palavras):
    return random.choice(palavras)


def scramble_word(palavra):
    return "".join(random.sample(palavra, len(palavra)))


def guesses():
    chutes = []
    index = 0
    while index < 3:
        chutes.append(input('Qual a palavra embaralhada?'))
        index += 1
    return chutes


def main(palavras):
    palavra_escolhida = random_word(palavras)
    palavra_embaralhada = scramble_word(palavra_escolhida)
    print(palavra_embaralhada)
    chutes = guesses()
    if palavra_escolhida in chutes:
        print(f'Ganhou! A palavra era {palavra_escolhida}')
    else:
        print(f'Errou! A palavra era {palavra_escolhida}')


if __name__ == "__main__":
    main(words)


# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

import json

with open('livros.json', 'r') as file:
    content = json.load(file)
    for line in content:
        print(content[0])

# Utilizando o arquivo pokemons.json , vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária "Quem é esse pokemon?", até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.

import json
import random


def import_pokemons():
    with open('pokemons.json', 'r') as file:
        content = json.load(file)['results']
        pokemons = []
        for pokemon in content:
            pokemons.append(pokemon['name'])
        return pokemons


def randomizePokemon(pokemons):
    return random.choice(pokemons)


def main():
    pokemons = import_pokemons()
    random_pokemon = randomizePokemon(pokemons)
    for letter in range(len(random_pokemon)):
        guess = input('Adivinhe o Pokemon')
        if guess == random_pokemon:
            return print(f'Acertou! O pokemon era {random_pokemon}')
        for index in range(letter + 1):
            print(random_pokemon[index], end="")
        print()


if __name__ == "__main__":
    main()