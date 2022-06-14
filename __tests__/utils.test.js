const { Charmander, Squirtle } = require("../Classes/Species");
const { strongOrWeak, attackDamage } = require("../utils/utils");

describe("strongOrWeak", () => {
  test("returns an object", () => {
    const pokeOne = new Charmander("Firey");
    const pokeTwo = new Squirtle("");

    expect(typeof strongOrWeak(pokeOne, pokeTwo)).toBe("object");
  });
  test("pokeone strong vs poketwo", () => {
    const pokeOne = new Charmander("Firey");
    const pokeTwo = new Squirtle("WetBoy");

    const { weakness, multiplier } = strongOrWeak(pokeOne, pokeTwo);
    expect(weakness).toBe(-1);
    expect(multiplier).toBe(0.75);
  });
  test("pokeone weak vs poketwo", () => {
    const pokeOne = new Charmander("Firey");
    const pokeTwo = new Squirtle("WetBoy");

    const { weakness, multiplier } = strongOrWeak(pokeTwo, pokeOne);
    expect(weakness).toBe(1);
    expect(multiplier).toBe(1.25);
  });
  test("neither", () => {
    const pokeOne = new Charmander("Firey");
    const pokeTwo = new Charmander("WetBoy");

    const { weakness, multiplier } = strongOrWeak(pokeTwo, pokeOne);
    expect(weakness).toBe(0);
    expect(multiplier).toBe(1);
  });
});

describe("attackDamage", () => {
  test("returns a number", () => {
    const AD = 5;
    const multiplier = 1;
    const actual = attackDamage(AD, multiplier);
    expect(typeof actual).toBe("number");
  });
  test("returns 5*1", () => {
    const AD = 5;
    const multiplier = 1;
    const actual = attackDamage(AD, multiplier);
    const expected = 5;
    expect(actual).toBe(expected);
  });
  test("returns 5*1.25 rounded DOWN", () => {
    const AD = 5;
    const multiplier = 1.25;
    const actual = attackDamage(AD, multiplier);
    const expected = 6;
    expect(actual).toBe(expected);
  });
  test("returns 5*0.75 rounded DOWN", () => {
    const AD = 5;
    const multiplier = 0.75;
    const actual = attackDamage(AD, multiplier);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
