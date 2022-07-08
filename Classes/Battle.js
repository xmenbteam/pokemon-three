const { attackMessage, faintMessage } = require("../utils/messages");
const { strongOrWeak, attackDamage } = require("../utils/utils");

class Battle {
  constructor(trainerOne, trainerTwo) {
    this.#trainerOne = trainerOne;
    this.#trainerTwo = trainerTwo;
    this.#trainerOneTurn = true;
  }

  #trainerOne;
  #trainerTwo;
  #trainerOneTurn;

  get trainerOne() {
    return this.#trainerOne;
  }
  get trainerTwo() {
    return this.#trainerTwo;
  }

  get trainerOneTurn() {
    return this.#trainerOneTurn;
  }

  fight(attPokeName, defPokeName) {
    const attPoke = this.#trainerOneTurn
      ? this.#trainerOne.getPokemon(attPokeName)
      : this.#trainerTwo.getPokemon(attPokeName);

    const defPoke = this.#trainerOneTurn
      ? this.#trainerTwo.getPokemon(defPokeName)
      : this.#trainerOne.getPokemon(defPokeName);

    const { multiplier, weakness } = strongOrWeak(attPoke, defPoke);

    const AD = attackDamage(attPoke.attackDamage, multiplier);

    defPoke.takeDamage(AD);

    this.#trainerOneTurn = !this.#trainerOneTurn;

    if (defPoke.hitPoints < 0) defPoke.hitPoints = 0;

    const hasFainted = defPoke.hasFainted();

    return hasFainted
      ? attackMessage(attPokeName, defPokeName, AD, weakness) +
          faintMessage(defPokeName)
      : attackMessage(attPokeName, defPokeName, AD, weakness);
  }
}

module.exports = Battle;
