from stack import Stack


def solve_expression(expr):
    stack = Stack(1000)
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        # ex 4 -> subtraction
        elif token == '-':
            num1 = stack.pop()
            num2 = stack.pop()
            result = num1 - num2
            stack.push(result)
            # division
        elif token == '/':
            num1 = stack.pop()
            num2 = stack.pop()
            result = num1 / num2
            stack.push(int(result))
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


print(solve_expression("10 5 - 3 *"))
print(solve_expression("5 10 / 3 *"))
