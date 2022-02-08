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

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


def squarePrinter(sides):
    index = 1
    while index < sides + 1:
        print(sides * '*')
        index += 1


squarePrinter(4)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .

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


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.


def tipoDeTriangulo(ladoA, ladoB, ladoC):
    if (
        ladoA + ladoB < ladoC
        or ladoA + ladoC < ladoB
        or ladoB + ladoC < ladoA
    ):
        return 'nao eh triangulo'
    if (ladoA == ladoB == ladoC):
        return 'triangulo equilatero'
    if (
        ladoA == ladoB
        or ladoB == ladoC
        or ladoA == ladoC
    ):
        return 'triangulo isosceles'
    return 'triangulo escaleno'


print(tipoDeTriangulo(1, 2, 3))
print(tipoDeTriangulo(1, 1, 1))
print(tipoDeTriangulo(1, 2, 2))
print(tipoDeTriangulo(1, 7, 1))


# Bonus1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .

lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def menorNumeroDaLista(list):
    menorNumero = list[0]
    for numero in list:
        if numero < menorNumero:
            menorNumero = numero
    return menorNumero


print(menorNumeroDaLista(lista))
