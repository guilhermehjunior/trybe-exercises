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
words = ["abutre", "cachorro", "asterix", "sistema"]


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
