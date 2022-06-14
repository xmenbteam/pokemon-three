const Pokeball = require("./Pokeball");

class Trainer {
  constructor(name) {
    this.#name = name;
    this.#belt = [
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
    ];
  }

  #belt;
  #name;

  get belt() {
    return this.#belt;
  }

  get name() {
    return this.#name;
  }

  catch(pokemon) {
    for (let i = 0; i < this.#belt.length; i++) {
      const currentBall = this.#belt[i];
      if (currentBall.isEmpty) {
        currentBall.throw(pokemon);
        return;
      }
    }
    return "Bloody full m8!";
  }

  getPokemon(name) {
    for (let i = 0; i < this.#belt.length; i++) {
      const currentBall = this.#belt[i];
      const isName = currentBall.contains === name;

      if (isName) return currentBall.throw();
    }
    return "No one here by that name m8";
  }
}

module.exports = Trainer;
