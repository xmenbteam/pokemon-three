const Pokeball = require("../Classes/Pokeball");
const { Squirtle } = require("../Classes/Species");

afterEach(() => {
  jest.clearAllMocks();
});

describe("pokeball", () => {
  test("is an object", () => {
    const pokeball = new Pokeball();
    expect(typeof pokeball).toBe("object");
  });
  describe("properties", () => {
    test("isEmpty", () => {
      const pokeball = new Pokeball();
      const newPoke = new Squirtle("Dave");
      expect(pokeball.isEmpty).toBe(true);
      pokeball.throw(newPoke);
      expect(pokeball.isEmpty).toBe(false);
    });
    describe("contains", () => {
      test("empty on initialisation", () => {
        const pokeball = new Pokeball();
        expect(pokeball.contains).toBe("empty!");
      });
      test("returns pokemon name", () => {
        const pokeball = new Pokeball();
        const newPoke = new Squirtle("Dave");
        pokeball.throw(newPoke);
        expect(pokeball.contains).toBe("Dave");
      });
    });
    describe("storedPokemon", () => {
      test("contains caught pokemon", () => {
        const pokeball = new Pokeball();
        const newPoke = new Squirtle("Dave");
        pokeball.throw(newPoke);
        expect(pokeball.storedPokemon).toEqual(
          expect.objectContaining({
            type: "water",
            hitPoints: expect.any(Number),
            attackDamage: expect.any(Number),
            move: "water gun",
            name: "Dave",
          })
        );
      });
    });
  });
  describe("methods", () => {
    describe("throw", () => {
      test("pass in a pokemon to catch it", () => {
        const newPoke = new Squirtle("Dave");
        const pokeball = new Pokeball();
        const cons = jest.spyOn(console, "log");
        pokeball.throw(newPoke);
        expect(cons).toBeCalledWith("You caught Dave!");
      });
      test("No argument passed, isEmpty", () => {
        const pokeball = new Pokeball();
        const cons = jest.spyOn(console, "log");
        pokeball.throw();
        expect(cons).toBeCalledWith("Pokeball is empty!");
      });
      test("No argument passed, !isEmpty", () => {
        const pokeball = new Pokeball();
        const newPoke = new Squirtle("Dave");
        const cons = jest.spyOn(console, "log");

        pokeball.throw(newPoke);
        expect(pokeball.contains).toBe("Dave");
        pokeball.throw();
        expect(cons.mock.calls).toEqual([["You caught Dave!"], ["Go! Dave!"]]);
      });
    });
  });
});
