const { Pokemon } = require("./Pokemon");
const { Fire, Water, Grass } = require("./Types");

class Charmander extends Fire {
  constructor(name) {
    super(name);
    this.move = "ember";
  }
}

class Squirtle extends Water {
  constructor(name) {
    super(name);
    this.move = "water gun";
  }
}

class Bulbasaur extends Grass {
  constructor(name) {
    super(name);
    this.move = "vine whip";
  }
}

class Ratatta extends Pokemon {
  constructor(name) {
    super(name);
  }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Ratatta };
