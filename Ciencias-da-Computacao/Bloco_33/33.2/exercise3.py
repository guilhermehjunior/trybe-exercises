from abc import ABC, abstractclassmethod


class Figura_geometrica(ABC):
    @abstractclassmethod
    def area():
        raise NotImplementedError

    @abstractclassmethod
    def perimetro():
        raise NotImplementedError


class Quadrado(Figura_geometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(Figura_geometrica):
    def __init__(self, lado1, lado2):
        self.lado1 = lado1
        self.lado2 = lado2

    def area(self):
        return self.lado1 * self.lado2

    def perimetro(self):
        return self.lado1 * 2 + self.lado2 * 2


class Circulo(Figura_geometrica):
    def __init__(self, raio):
        self.raio = raio
        self.PI = 3.141592

    def area(self):
        return (self.raio ** 2) * self.PI

    def perimetro(self):
        return 2 * self.PI * self.raio
