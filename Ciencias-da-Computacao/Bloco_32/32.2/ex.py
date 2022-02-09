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
