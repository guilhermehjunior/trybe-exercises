from collections.abc import Iterator, Iterable
from abc import ABC, abstractmethod


class Strategy(ABC):
    @abstractmethod
    def iterator_strategy(valor):
        pass


class EstrategiaInversa(Strategy):
    @staticmethod
    def iterator_strategy(valor):
        return valor - 1


class EstrategiaPadrao(Strategy):
    @staticmethod
    def iterator_strategy(valor):
        return valor + 1


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class BaralhoIterator(Iterator):
    def __init__(self, cartas, estrategia):
        self.cartas = cartas
        self.carta = 0
        self.estrategia = estrategia

    def __next__(self):
        nova_carta = self.cartas[self.carta]
        if not nova_carta:
            raise StopIteration()
        self.carta = self.estrategia.iterator_strategy(self.carta)
        return nova_carta


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, EstrategiaPadrao)


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoIterator(self._cartas, EstrategiaInversa)


my_class = Baralho()
itter = iter(my_class)
print(next(itter))
print(next(itter))
print(next(itter))
print(next(itter))
print(next(itter))

my_class2 = BaralhoInverso()
itter2 = iter(my_class2)
print(next(itter2))
print(next(itter2))
print(next(itter2))
print(next(itter2))
print(next(itter2))