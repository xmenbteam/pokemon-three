class Utils {
  static statMaker(min, max) {
    const stat = Math.floor(Math.random() * (max - min + 1)) + min;
    return stat;
  }
}

module.exports = Utils;
