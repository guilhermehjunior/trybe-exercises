def tempo_sem_estabilidade(array):
    horas_sem_estabilidade = 1
    tempo_max_sem_estabilidade = 0
    index = 1
    while index < len(array):
        if array[index] == array[index - 1]:
            horas_sem_estabilidade += 1
        else:
            if horas_sem_estabilidade > tempo_max_sem_estabilidade:
                tempo_max_sem_estabilidade = horas_sem_estabilidade
            horas_sem_estabilidade = 1
        index += 1
    return tempo_max_sem_estabilidade


valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]


valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]

print(tempo_sem_estabilidade(valores_coletados2))
