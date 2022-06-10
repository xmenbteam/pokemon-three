const Pokeball = require("../Classes/Pokeball");
const { Squirtle, Charmander } = require("../Classes/Species");
const Trainer = require("../Classes/Trainer");

describe("Trainer", () => {
  describe("Properties", () => {
    describe("belt", () => {
      test("has a name", () => {
        const trainerOne = new Trainer("Sam");
        expect(trainerOne.name).toBe("Sam");
      });
      test("has a belt", () => {
        const trainerOne = new Trainer("Sam");
        expect(trainerOne.belt).toEqual([
          new Pokeball(),
          new Pokeball(),
          new Pokeball(),
          new Pokeball(),
          new Pokeball(),
          new Pokeball(),
        ]);
      });
    });
  });
  describe("Methods", () => {
    describe("catch", () => {
      test("catches a pokemon", () => {
        const newPoke = new Squirtle("Jim");
        const trainerOne = new Trainer("Guy");

        trainerOne.catch(newPoke);

        expect(trainerOne.belt[0].storedPokemon).toEqual(
          expect.objectContaining({
            type: "water",
            hitPoints: expect.any(Number),
            attackDamage: expect.any(Number),
            move: "water gun",
            name: "Jim",
          })
        );
      });
      test("catches 2 pokeymen", () => {
        const newPoke = new Squirtle("Jim");
        const newPoke2 = new Charmander("James");
        const trainerOne = new Trainer("Guy");

        trainerOne.catch(newPoke);
        trainerOne.catch(newPoke2);

        expect(trainerOne.belt[0].storedPokemon).toEqual(
          expect.objectContaining({
            type: "water",
            hitPoints: expect.any(Number),
            attackDamage: expect.any(Number),
            move: "water gun",
            name: "Jim",
          })
        );
        expect(trainerOne.belt[1].storedPokemon).toEqual(
          expect.objectContaining({
            type: "fire",
            hitPoints: expect.any(Number),
            attackDamage: expect.any(Number),
            move: "ember",
            name: "James",
          })
        );
      });
      test("sends 'is full' message", () => {
        const newPoke = new Squirtle("Jim");
        const pokeymen = [
          new Charmander("James"),
          new Charmander("James"),
          new Charmander("James"),
          new Charmander("James"),
          new Charmander("James"),
          new Charmander("James"),
        ];

        const trainerOne = new Trainer("Guy");

        pokeymen.forEach((pokemon) => {
          trainerOne.catch(pokemon);
        });

        const message = trainerOne.catch(newPoke);

        expect(message).toBe("Bloody full m8!");
      });
    });
  });
});
