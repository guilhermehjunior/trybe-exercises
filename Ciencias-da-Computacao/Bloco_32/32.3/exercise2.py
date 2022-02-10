letters_and_numbers_dict = {
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
}


def sentence_to_numbers(sentence):
    string = ''
    for letter in sentence:
        index = 2
        if letter in '-01':
            string += letter
        else:
            while index <= 9:
                if letter in letters_and_numbers_dict[index]:
                    string += str(index)
                    break
                index += 1
                if index == 10:
                    raise ValueError("Invalid Character")
    return string


print(sentence_to_numbers("1-HOME-SWEET-HOME"))
