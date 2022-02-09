import json
import random


def import_pokemons():
    with open('pokemons.json', 'r') as file:
        content = json.load(file)['results']
        pokemons = []
        for pokemon in content:
            pokemons.append(pokemon['name'])
        return pokemons


def randomizePokemon(pokemons):
    return random.choice(pokemons)


def main():
    pokemons = import_pokemons()
    random_pokemon = randomizePokemon(pokemons)
    for letter in range(len(random_pokemon)):
        guess = input('Adivinhe o Pokemon')
        if guess == random_pokemon:
            return print(f'Acertou! O pokemon era {random_pokemon}')
        for index in range(letter + 1):
            print(random_pokemon[index], end="")
        print()


if __name__ == "__main__":
    main()