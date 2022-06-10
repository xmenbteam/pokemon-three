const { Pokemon } = require("./Pokemon");

class Fire extends Pokemon {
  constructor(name) {
    super(name);
    this.type = "fire";
  }
  isWeakTo(pokemon) {
    return pokemon.type === "water";
  }
  isStrongAgainst(pokemon) {
    return pokemon.type === "grass";
  }
}

class Grass extends Pokemon {
  constructor(name) {
    super(name);
    this.type = "grass";
  }
  isWeakTo(pokemon) {
    return pokemon.type === "fire";
  }
  isStrongAgainst(pokemon) {
    return pokemon.type === "water";
  }
}

class Water extends Pokemon {
  constructor(name) {
    super(name);
    this.type = "water";
  }
  isWeakTo(pokemon) {
    return pokemon.type === "grass";
  }
  isStrongAgainst(pokemon) {
    return pokemon.type === "fire";
  }
}

module.exports = { Fire, Grass, Water };
