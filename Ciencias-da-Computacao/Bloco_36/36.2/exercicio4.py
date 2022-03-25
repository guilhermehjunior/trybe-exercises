def pessoas_na_biblioteca(entradas, saidas, hora_buscada):
    pessoas = 0
    for index, hora in enumerate(entradas):
        if hora < hora_buscada < saidas[index]:
            pessoas += 1
    return pessoas


print(pessoas_na_biblioteca([1, 2, 2], [4, 2, 7], 3))


# def students_in_instant(arrivals, departures, time_instant):
#     return sum(
#         arrival < time_instant < departure
#         for arrival, departure in zip(arrivals, departures)
#     )
