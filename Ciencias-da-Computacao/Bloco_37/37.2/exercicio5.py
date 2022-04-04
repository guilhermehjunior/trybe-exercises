from stack import Stack


def revertedBetweenParentheses(string):
    stack = Stack(1000)
    list_string = list(string)
    new_list = list()
    final_list = list()
    reversed = False
    for letter in list_string:
        if letter == '(':
            reversed = True
            new_list.append(letter)
        elif letter == ')':
            reversed = False
            new_list.append(letter)
        else:
            if reversed:
                stack.push(letter)
            else:
                new_list.append(letter)
    for letter in new_list:
        if letter == '(':
            for _ in range(stack.size()):
                final_list.append(stack.pop())
        elif letter != ')':
            final_list.append(letter)
    return ''.join(final_list)


string = 'teste(lagel)(abc)'
print(revertedBetweenParentheses(string))
