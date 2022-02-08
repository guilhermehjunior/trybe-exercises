import math


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


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).


def calculaTotalLatasTinta(tamanho):
    litros = math.ceil(tamanho / 3)
    latas = math.ceil(litros / 18)
    return (latas, latas * 80)


totalLatas = calculaTotalLatasTinta(30)


print('total de latas:', totalLatas[0], 'total R$:', totalLatas[1])
