const { statMaker } = require("../utils/utils");

class Pokemon {
  type = "normal";
  hitPoints = statMaker(30, 40);
  attackDamage = statMaker(3, 6);
  move = "tackle";

  isEffectiveAgainst() {
    return false;
  }
  isWeakTo() {
    return false;
  }
  takeDamage(damage) {
    this.hitPoints -= damage;
  }
  useMove() {
    console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitPoints <= 0) {
      this.hitPoints = 0;
      return true;
    }
    return false;
  }
  constructor(name) {
    this.name = name;
  }
}

module.exports = { Pokemon };
