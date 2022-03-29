def maior_substring(string):
    largest_string_len = 0
    string_set = set()
    for letter in string:
        if letter in string_set:
            if len(string_set) > largest_string_len:
                largest_string_len = len(string_set)
            string_set.clear()
            string_set.add(letter)
        else:
            string_set.add(letter)
    return largest_string_len


if __name__ == "__main__":
    str = "uasduhauauhaabcdefghijabuhuiasdaah"
    print(maior_substring(str))
