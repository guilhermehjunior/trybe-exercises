# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def maior(intA, intB):
    if intA > intB:
        return intA
    return intB


print(maior(10, 15))


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def mediaAritimetica(list):
    total = 0
    for number in list:
        total += number
    return total / len(list)


print(mediaAritimetica([1, 2, 3]))

#Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


def squarePrinter(sides):
    index = 1
    while index < sides + 1:
        print(sides * '*')
        index += 1


squarePrinter(4)


#Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .

def longestName(namesLi):
    longestName = ''
    for name in namesLi:
        if len(name) > len(longestName):
            longestName = name
    return longestName


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


print(longestName(names))
