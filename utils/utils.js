class Utils {
  static statMaker(min, max) {
    const stat = Math.floor(Math.random() * (max - min + 1)) + min;
    return stat;
  }
  static strongOrWeak(pokeOne, pokeTwo) {
    let weakness = 0;
    if (pokeOne.isWeakTo(pokeTwo)) weakness--;
    if (pokeOne.isStrongAgainst(pokeTwo)) weakness++;

    const weaknessRef = {
      "-1": 0.75,
      0: 1,
      1: 1.25,
    };

    return { multiplier: weaknessRef[weakness], weakness };
  }
  static attackDamage(AD, multiplier) {
    let damage = 0;

    damage += AD * multiplier;

    return Math.floor(damage);
  }
}

module.exports = Utils;
