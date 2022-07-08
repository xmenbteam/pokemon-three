const { Pokemon } = require("./Pokemon");
const { Fire, Water, Grass } = require("./Types");

class Charmander extends Fire {
  constructor(name, HP, AD) {
    super(name);
    this.move = "ember";
    if (HP) this.hitPoints = HP;
    if (AD) this.attackDamage = AD;
  }
}

class Squirtle extends Water {
  constructor(name, HP, AD) {
    super(name);
    this.move = "water gun";
    if (HP) this.hitPoints = HP;
    if (AD) this.attackDamage = AD;
  }
}

class Bulbasaur extends Grass {
  constructor(name, HP, AD) {
    super(name);
    this.move = "vine whip";
    if (HP) this.hitPoints = HP;
    if (AD) this.attackDamage = AD;
  }
}

class Ratatta extends Pokemon {
  constructor(name, HP, AD) {
    super(name);
    if (HP) this.hitPoints = HP;
    if (AD) this.attackDamage = AD;
  }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Ratatta };
