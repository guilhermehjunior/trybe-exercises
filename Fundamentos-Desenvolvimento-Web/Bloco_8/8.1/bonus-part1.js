const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function dragonDamage() {
  return Math.ceil(Math.random * (dragon.strength - 15) + 15);
}

function warriorDamage() {
  return Math.ceil(Math.random * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);
}

function mageDamage() {
  if (mage.mana < 15) return {
    dano: 'Não possui mana suficiente',
    mana: 0,
  }
  return {
    dano: Math.ceil(Math.random * mage.intelligence + mage.intelligence),
    mana: 15,
  }
}