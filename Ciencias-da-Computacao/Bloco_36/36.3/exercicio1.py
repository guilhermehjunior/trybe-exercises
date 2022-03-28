def formed_words_with_string(array, string):
    string_dict = {}
    for letter in string:
        if letter in string_dict:
            string_dict[letter] += 1
        else:
            string_dict[letter] = 1

    dict_list = []
    for word in array:
        new_dict = {}
        for letter in word:
            if letter in new_dict:
                new_dict[letter] += 1
            else:
                new_dict[letter] = 1
        dict_list.append(new_dict)

    letters_in_word = 0
    total_letters = 0
    for index, word in enumerate(array):
        for letter in word:
            if letter in string_dict and dict_list[index][letter] <= string_dict[letter]:
                letters_in_word += 1
        if letters_in_word == len(word):
            total_letters += len(word)
        letters_in_word = 0

    return total_letters


words = ["hello", "world", "students"]
chars = "welldonehoneyr"

print(formed_words_with_string(words, chars))
