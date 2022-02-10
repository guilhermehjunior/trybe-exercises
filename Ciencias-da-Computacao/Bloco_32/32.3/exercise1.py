def fizz3Buzz5(number):
    lista = []
    index = 1
    while index <= number:
        if index % 15 == 0:
            lista.append('FizzBuzz')
        elif index % 5 == 0:
            lista.append('Buzz')
        elif index % 3 == 0:
            lista.append('Fizz')
        else:
            lista.append(index)
        index += 1
    return lista
