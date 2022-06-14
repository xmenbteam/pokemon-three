const Battle = require("../Classes/Battle");
const { Charmander, Squirtle, Bulbasaur } = require("../Classes/Species");
const Trainer = require("../Classes/Trainer");
const { strongOrWeak, attackDamage } = require("../utils/utils");

describe("Battle", () => {
  test("is an object", () => {
    expect(typeof new Battle()).toBe("object");
  });
  describe("Two Trainers", () => {
    const pokeymenOne = [
      new Charmander("James"),
      new Squirtle("Jame"),
      new Bulbasaur("Jam"),
    ];

    const trainerOne = new Trainer("Guy");

    pokeymenOne.forEach((pokemon) => {
      trainerOne.catch(pokemon);
    });
    const pokeymenTwo = [
      new Squirtle("Dave"),
      new Bulbasaur("Dav"),
      new Charmander("Da"),
    ];

    const trainerTwo = new Trainer("Robbie");

    pokeymenTwo.forEach((pokemon) => {
      trainerTwo.catch(pokemon);
    });
    test("takes two trainers with pokeymen", () => {
      const testBattle = new Battle(trainerOne, trainerTwo);
      expect(testBattle.trainerOne.name).toBe("Guy");
      expect(testBattle.trainerTwo.name).toBe("Robbie");
    });
  });
  describe("FIGHT", () => {
    const pokeymenOne = [
      new Charmander("James", 30, 5),
      new Squirtle("Jame", 30, 5),
      new Bulbasaur("Jam", 30, 5),
    ];

    const trainerOne = new Trainer("Guy");

    pokeymenOne.forEach((pokemon) => {
      trainerOne.catch(pokemon);
    });
    const pokeymenTwo = [
      new Squirtle("Dave", 30, 5),
      new Bulbasaur("Dav", 30, 5),
      new Charmander("Da", 30, 5),
    ];

    const trainerTwo = new Trainer("Robbie");

    pokeymenTwo.forEach((pokemon) => {
      trainerTwo.catch(pokemon);
    });
    test("Not Very Effective", () => {
      // James is a charmander, Dave is a squirtle
      const pokeTwo = trainerTwo.getPokemon("Dave");

      const testBattle = new Battle(trainerOne, trainerTwo);

      const actual = testBattle.fight("James", "Dave");
      const expected = `James attacked Dave and dealt 4 damage! It wasn't very effective...`;

      expect(pokeTwo.hitPoints).toBe(25);
      expect(actual).toBe(expected);
    });
    test("Super Effective", () => {
      // James is a charmander, Dave is a squirtle
      const pokeTwo = trainerTwo.getPokemon("Dave");

      const testBattle = new Battle(trainerOne, trainerTwo);

      const actual = testBattle.fight("Dave", "James");
      const expected = `James attacked Dave and dealt 4 damage! It was super effective!!`;

      expect(pokeTwo.hitPoints).toBe(28);
      expect(actual).toBe(expected);
    });
  });
});
