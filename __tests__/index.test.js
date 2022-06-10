const { Pokemon } = require("../Classes/Pokemon");
const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Ratatta,
} = require("../Classes/Species");
const { Fire, Grass, Water } = require("../Classes/Types");

describe("Pokemon Classes", () => {
  describe("Pokemon parent class", () => {
    test("returns an object", () => {
      const pokeOne = new Pokemon();
      expect(typeof pokeOne).toBe("object");
    });
    test("has a name", () => {
      const pokeOne = new Pokemon("Cheeseface");
      expect(pokeOne.name).toBe("Cheeseface");
    });
    test("has a default type of normal", () => {
      const pokeOne = new Pokemon("Cheeseface");
      expect(pokeOne.type).toBe("normal");
    });
    test("has hitpoints", () => {
      const pokeOne = new Pokemon("Cheeseface", 20);
      expect(pokeOne.hitPoints >= 30).toBe(true);
      expect(pokeOne.hitPoints <= 40).toBe(true);
    });
    test("has attackDamage", () => {
      const pokeOne = new Pokemon("Cheeseface", 20);
      expect(pokeOne.attackDamage >= 3).toBe(true);
      expect(pokeOne.attackDamage <= 6).toBe(true);
    });
    test("has a default move of tackle", () => {
      const pokeOne = new Pokemon("Cheeseface");
      expect(pokeOne.move).toBe("tackle");
    });
    test("isEffectiveAgainst returns false", () => {
      const pokeOne = new Pokemon("Cheeseface");
      const pokeTwo = new Pokemon("Cheeseface");
      expect(pokeOne.isEffectiveAgainst(pokeTwo)).toBe(false);
    });
    test("isWeakTo returns false", () => {
      const pokeOne = new Pokemon("Cheeseface");
      const pokeTwo = new Pokemon("Cheeseface");
      expect(pokeOne.isWeakTo(pokeTwo)).toBe(false);
    });
    test("takeDamage", () => {
      const pokeOne = new Pokemon("Cheeseface");
      const before = pokeOne.hitPoints;
      pokeOne.takeDamage(4);
      const after = pokeOne.hitPoints;
      expect(before - after).toBe(4);
    });
    test("useMove", () => {
      const cons = jest.spyOn(console, "log");
      const pokeOne = new Pokemon("Cheeseface");
      const AD = pokeOne.attackDamage;
      const move = pokeOne.useMove();
      expect(cons).toHaveBeenCalledWith("Cheeseface used tackle!");
      expect(move).toBe(AD);
    });
    test("!hasFainted", () => {
      const pokeOne = new Pokemon("Cheeseface");
      expect(pokeOne.hasFainted()).toBe(false);
    });
    test("hasFainted", () => {
      const pokeOne = new Pokemon("Cheeseface");
      expect(pokeOne.hasFainted()).toBe(false);
      pokeOne.takeDamage(3000);
      expect(pokeOne.hasFainted()).toBe(true);
    });
  });
  describe("Child Classes", () => {
    const firePoke = new Fire("Barry");
    const grassPoke = new Grass("Barry");
    const waterPoke = new Water("Barry");
    const normPoke = new Pokemon("Dave");
    describe("Fire", () => {
      test("Has a fire type", () => {
        expect(firePoke.type).toBe("fire");
      });
      describe("isWeakTo", () => {
        test("!isWeakTo normal", () => {
          expect(firePoke.isWeakTo(normPoke)).toBe(false);
        });
        test("!isWeakTo grass", () => {
          expect(firePoke.isWeakTo(grassPoke)).toBe(false);
        });
        test("isWeakTo water", () => {
          expect(firePoke.isWeakTo(waterPoke)).toBe(true);
        });
      });
      describe("isStrongAgainst", () => {
        test("!isStrongAgainst normal", () => {
          expect(firePoke.isStrongAgainst(normPoke)).toBe(false);
        });
        test("!isStrongAgainst water", () => {
          expect(firePoke.isStrongAgainst(waterPoke)).toBe(false);
        });
        test("isStrongAgainst grass", () => {
          expect(firePoke.isStrongAgainst(grassPoke)).toBe(true);
        });
      });
    });
    describe("Grass", () => {
      test("Has a grass type", () => {
        expect(grassPoke.type).toBe("grass");
      });
      describe("isWeakTo", () => {
        test("!isWeakTo normal", () => {
          expect(grassPoke.isWeakTo(normPoke)).toBe(false);
        });
        test("!isWeakTo grass", () => {
          expect(grassPoke.isWeakTo(grassPoke)).toBe(false);
        });
        test("isWeakTo fire", () => {
          expect(grassPoke.isWeakTo(firePoke)).toBe(true);
        });
      });
      describe("isStrongAgainst", () => {
        test("!isStrongAgainst normal", () => {
          expect(grassPoke.isStrongAgainst(normPoke)).toBe(false);
        });
        test("isStrongAgainst water", () => {
          expect(grassPoke.isStrongAgainst(waterPoke)).toBe(true);
        });
        test("!isStrongAgainst fire", () => {
          expect(grassPoke.isStrongAgainst(firePoke)).toBe(false);
        });
      });
    });
    describe("Water", () => {
      test("Has a water type", () => {
        expect(waterPoke.type).toBe("water");
      });

      describe("isWeakTo", () => {
        test("!isWeakTo normal", () => {
          expect(waterPoke.isWeakTo(normPoke)).toBe(false);
        });
        test("isWeakTo grass", () => {
          expect(waterPoke.isWeakTo(grassPoke)).toBe(true);
        });
        test("!isWeakTo fire", () => {
          expect(waterPoke.isWeakTo(firePoke)).toBe(false);
        });
      });
      describe("isStrongAgainst", () => {
        test("!isStrongAgainst normal", () => {
          expect(waterPoke.isStrongAgainst(normPoke)).toBe(false);
        });
        test("isStrongAgainst grass", () => {
          expect(waterPoke.isStrongAgainst(grassPoke)).toBe(false);
        });
        test("!isStrongAgainst fire", () => {
          expect(waterPoke.isStrongAgainst(firePoke)).toBe(true);
        });
      });
    });
  });
  describe("Species Classes", () => {
    test("Charmander has 'ember'", () => {
      const flamey = new Charmander("Dave");
      expect(flamey.move).toBe("ember");
    });
    test("Squirtle has 'water gun'", () => {
      const squirty = new Squirtle("Dave");
      expect(squirty.move).toBe("water gun");
    });
    test("Bulbasaur has 'vine whip'", () => {
      const squirty = new Bulbasaur("Dave");
      expect(squirty.move).toBe("vine whip");
    });
    test("Rattata has 'tackle'", () => {
      const ratty = new Ratatta("Dave");
      expect(ratty.move).toBe("tackle");
    });
  });
});
