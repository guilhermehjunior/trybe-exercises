def boas_combinacoes(produtos):
    combinacoes_boas = []
    for index, product in enumerate(produtos):
        for index2, product2 in enumerate(produtos):
            if product == product2 and index < index2:
                combinacoes_boas.append((index, index2))
    return combinacoes_boas


print(boas_combinacoes([1, 3, 1, 1, 2, 3]))
