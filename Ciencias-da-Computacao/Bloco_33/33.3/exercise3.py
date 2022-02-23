from exercise2 import Baralho
from collections.abc import Iterator


class BaralhoInversoIterator(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.carta = -1

    def __next__(self):
        nova_carta = self.cartas[self.cart]
        if not nova_carta:
            raise StopIteration()
        self.carta -= 1
        return nova_carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterator(self._cartas)
