const { attackMessage } = require("../utils/messages");

describe("attackMessage", () => {
  test("returns a string", () => {
    const one = "Dave";
    const two = "Sam";
    const AD = 4;
    const weakness = 1;
    const actual = attackMessage(one, two, AD, weakness);
    expect(typeof actual).toBe("string");
  });
  test("weakness = 1 - super effective!", () => {
    const one = "Dave";
    const two = "Sam";
    const AD = 4;
    const weakness = 1;
    const actual = attackMessage(one, two, AD, weakness);
    const expected =
      "Dave attacked Sam and dealt 4 damage! It was Super Effective!!";
    expect(actual).toBe(expected);
  });
  test("weakness = -1 - not effective!", () => {
    const one = "Dave";
    const two = "Sam";
    const AD = 4;
    const weakness = -1;
    const actual = attackMessage(one, two, AD, weakness);
    const expected =
      "Dave attacked Sam and dealt 4 damage! It wasn't very effective...";
    expect(actual).toBe(expected);
  });
  test("weakness = 0!", () => {
    const one = "Dave";
    const two = "Sam";
    const AD = 4;
    const weakness = 0;
    const actual = attackMessage(one, two, AD, weakness);
    const expected = "Dave attacked Sam and dealt 4 damage!";
    expect(actual).toBe(expected);
  });
});
