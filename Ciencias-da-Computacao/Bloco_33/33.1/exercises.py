class Retangulo:
    def __init__(self, side1, side2):
        self.side1 = side1
        self.side2 = side2

    def area(self):
        area = self.side1 * self.side2
        return area

    def perimetro(self):
        return self.side1 * 2 + self.side2 * 2


novo_retangulo = Retangulo(4, 2)

print(novo_retangulo.area())
print(novo_retangulo.perimetro())


class Circulo:
    def __init__(self, radio):
        self.radio = radio

    def area(self):
        return 3.14 * (self.radio ** 2)

    def perimetro(self):
        return 2 * 3.14 * self.radio


class Televisao:
    def __init__(self, state, volume, channel):
        self.state = state
        self.volume = volume
        self.channel = channel

    def change_state(self):
        self.state = not self.state

    def volume_up(self):
        self.volume += 1

    def volume_down(self):
        self.volume -= 1

    def change_channel(self, new_channel):
        self.channel = new_channel
