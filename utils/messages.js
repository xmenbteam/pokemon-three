class Messages {
  static attackMessage(pokeOneName, pokeTwoName, AD, weakness) {
    let message = `${pokeOneName} attacked ${pokeTwoName} and dealt ${AD} damage!`;

    const effectiveness = {
      1: ` It was Super Effective!!`,
      0: "",
      "-1": ` It wasn't very effective...`,
    };

    message += effectiveness[weakness.toString()];

    return message;
  }
  static faintMessage(pokeOneName) {
    return `\n \n${pokeOneName} fainted!`;
  }
}

module.exports = Messages;
