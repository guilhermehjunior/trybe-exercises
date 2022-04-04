from stack import Stack


class Parking():
    def __init__(self) -> None:
        self.stack = Stack(15)

    def add_car(self, car):
        self.stack.push(car)

    def remove_car(self, car):
        next_car = ''
        outside_cars = Stack(14)
        while next_car != car:
            outside_cars.push(self.stack.pop())
            next_car = self.stack.peek()
            if next_car == car:
                self.stack.pop()

        for _ in range(outside_cars.size()):
            self.stack.push(outside_cars.pop())

    def print(self):
        return print(self.stack)


if __name__ == "__main__":
    new_parking = Parking()
    new_parking.add_car('Monza')
    new_parking.add_car('Fusca')
    new_parking.add_car('Ferrari')
    new_parking.add_car('BMW')
    new_parking.add_car('Uno com escada em cima')
    new_parking.print()
    new_parking.remove_car('BMW')
    new_parking.print()
    new_parking.remove_car('Fusca')
    new_parking.print()
