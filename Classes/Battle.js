const { attackMessage } = require("../utils/messages");
const { strongOrWeak, attackDamage } = require("../utils/utils");

class Battle {
  constructor(trainerOne, trainerTwo) {
    this.#trainerOne = trainerOne;
    this.#trainerTwo = trainerTwo;
  }

  #trainerOne;
  #trainerTwo;

  get trainerOne() {
    return this.#trainerOne;
  }
  get trainerTwo() {
    return this.#trainerTwo;
  }

  fight(attPokeName, defPokeName) {
    const attPoke = this.#trainerOne.getPokemon(attPokeName);
    const defPoke = this.#trainerTwo.getPokemon(defPokeName);

    const { multiplier, weakness } = strongOrWeak(attPoke, defPoke);

    const AD = attackDamage(attPoke.attackDamage, multiplier);

    defPoke.takeDamage(AD);

    return attackMessage(attPokeName, defPokeName, AD, weakness);
  }
}

module.exports = Battle;
