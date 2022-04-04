class Stack():
    def __init__(self, limit):
        self._data = list()
        self._max_size = limit

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    # ex2
    def push(self, value):
        if len(self._data) == self._max_size:
            raise OverflowError("tamanho da lista excedeu o limite")
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        # -1 se refere ao último objeto da pilha.
        # Ou seja, o valor do topo da pilha
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    # ex1
    def min_value(self):
        return min(self._data)

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"
