const { statMaker } = require("../utils/utils");

class Pokemon {
  type = "normal";
  hitPoints;
  attackDamage;
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
  constructor(name, HP, AD) {
    this.name = name;
    this.hitPoints = HP || statMaker(30, 35);
    this.attackDamage = AD || statMaker(3, 6);
  }
}

module.exports = { Pokemon };
