def blefe(dict):
    jogadores = list(dict.keys())
    set1 = set(dict[jogadores[0]])
    set2 = set(dict[jogadores[1]])
    diff1 = set1.difference(set2)
    diff2 = set2.difference(set1)
    max1 = max(diff1)
    min1 = min(diff1)
    max2 = max(diff2)
    min2 = min(diff2)

    if max1 - min1 > max2 - min2:
        return jogadores[0]
    else:
        return jogadores[1]


if __name__ == "__main__":
    entrada = {
        'Josefina': [0, 1, 8, 9, 10],
        'Marco': [0, 2, 7, 9, 10]
    }
    print(blefe(entrada))
