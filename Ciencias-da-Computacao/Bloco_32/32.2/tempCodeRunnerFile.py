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