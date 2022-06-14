class Pokeball {
  constructor() {
    this.#isEmpty = true;
    this.#storedPokemon = {};
    this.#contains = "empty!";
  }

  #isEmpty;
  #storedPokemon;
  #contains;

  get isEmpty() {
    return this.#isEmpty;
  }

  get contains() {
    return this.#contains;
  }

  get storedPokemon() {
    return this.#storedPokemon;
  }

  throw(pokemon) {
    if (this.#isEmpty) {
      if (!pokemon) console.log("Pokeball is empty!");
      else {
        this.#isEmpty = false;
        this.#storedPokemon = pokemon;
        this.#contains = pokemon.name;
        console.log(`You caught ${pokemon.name}!`);
      }
    } else {
      console.log(`Go! ${this.#storedPokemon.name}!`);
      return this.#storedPokemon;
    }
  }
}

module.exports = Pokeball;
