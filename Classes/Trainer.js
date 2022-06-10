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
        break;
      }
    }
    return "Bloody full m8!";
  }
}

module.exports = Trainer;
