def embaralhar(baralho):
    tamanho_baralho = len(baralho) // 2
    parte_1 = baralho[:tamanho_baralho]
    parte_2 = baralho[tamanho_baralho:]
    baralho_embaralhado = []
    for index, value in enumerate(parte_1):
        baralho_embaralhado.append(value)
        baralho_embaralhado.append(parte_2[index])
    return baralho_embaralhado


print(embaralhar([1, 4, 4, 7, 6, 6]))
