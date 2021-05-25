const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};

const battleMembers = { mage, warrior, dragon };

function dragonDamage(dragon) {
  return Math.ceil(Math.random() * (dragon.strength - 15) + 15);
}

function warriorDamage(warrior) {
  return Math.ceil(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);
}

function mageDamage(mage) {
  if (mage.mana < 15) return {
    dano: 'Não possui mana suficiente',
    mana: 0,
  }
  return {
    dano: Math.ceil(Math.random() * mage.intelligence + mage.intelligence),
    mana: 15,
  }
}

const gameActions = {
  warriorTurn: (callback, warrior, dragon) => {
    const danoWarrior = callback(warrior);
    warrior.damage += danoWarrior;
    dragon.healthPoints -= danoWarrior;
  },
  mageTurn: (callback, mage, dragon) => {
    const statusMage = callback(mage);
    mage.damage += statusMage.dano;
    mage.mana -= statusMage.mana;
    dragon.healthPoints -= statusMage.dano;
  },
  dragonTurn: (callback, mage, warrior, dragon) => {
    const danoDragon = callback(dragon);
    dragon.damage += 2 * danoDragon;
    mage.healthPoints -= danoDragon;
    warrior.healthPoints -= danoDragon;
  },
  finalDoTurno: () => {
    console.log(battleMembers);
    return battleMembers;
  },
};

gameActions.warriorTurn(warriorDamage, warrior, dragon);
gameActions.mageTurn(mageDamage, mage, dragon);
gameActions.dragonTurn(dragonDamage, mage, warrior, dragon);
gameActions.finalDoTurno();
gameActions.warriorTurn(warriorDamage, warrior, dragon);
gameActions.mageTurn(mageDamage, mage, dragon);
gameActions.dragonTurn(dragonDamage, mage, warrior, dragon);
gameActions.finalDoTurno();
