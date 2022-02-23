class TV:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.volume = 50
        self.canal = 1
        self.ligada = False

    def aumentar_volume(self):
        self.volume += 1
        if self.volume > 99:
            self.volume = 99

    def diminuir_volume(self):
        self.volume -= 1
        if self.volume < 1:
            self.volume = 1

    def modificar_canal(self, canal):
        if 99 < canal < 0:
            raise ValueError
        self.canal = canal

    def ligar_desligar(self):
        self.ligada = not self.ligada


nova_tv = TV(10)

nova_tv.modificar_canal(10)

print(nova_tv.canal)
