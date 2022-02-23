from abc import ABC, abstractmethod


class Impostos(ABC):
    @abstractmethod
    def calcular_imposto():
        pass


class ISS(Impostos):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.1


class ICMS(Impostos):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.06


class PIS(Impostos):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.0065


class CONFINS(Impostos):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.03


class Orcamento():
    def __init__(self, valor):
        self.valor = valor

    def valor_imposto(self, imposto):
        return imposto.calcular_imposto(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.valor_imposto(ISS)}")
print(f"ICMS: {orcamento.valor_imposto(ICMS)}")
print(f"PIS: {orcamento.valor_imposto(PIS)}")
print(f"CONFINS: {orcamento.valor_imposto(CONFINS)}")
