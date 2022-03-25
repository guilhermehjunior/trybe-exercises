def servidores_que_se_comunicam(matriz):
    servidores = 0
    servidores_por_linha = 0
    colunas_por_linhas = len(matriz[0])
    servidores_por_colunas = [0 for _ in range(colunas_por_linhas)]

    for index2 in range(len(matriz)):
        for index in range(len(matriz[index2])):
            if matriz[index2][index] == 1:
                servidores_por_linha += 1
                servidores_por_colunas[index] += 1
        if servidores_por_linha > 1:
            servidores += servidores_por_linha
        servidores_por_linha = 0

    for servidores_na_coluna in servidores_por_colunas:
        if servidores_na_coluna > 1:
            servidores += servidores_na_coluna

    return servidores


servidores = [[1, 1, 0],
              [1, 0, 0],
              [0, 0, 1]]

print(servidores_que_se_comunicam(servidores))


#Solucao incompleta, pois adiciona o mesmo servidor mais de uma vez caso sua coluna e linha tenham mais de um servidor