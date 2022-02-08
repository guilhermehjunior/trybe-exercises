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
