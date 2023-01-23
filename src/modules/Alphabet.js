export class Alphabet {
  constructor() {
    this.letterCounts = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1,
    };
  }

  decreaseLetterCount(letter) {
    /**
     * Decreases letter count by 1 for a given letter and updates letter in letterCounts.
     * When letter count is 0, removes letter from letterCounts.
     * @param {[string]} letter [letter to decrease]
     */
    // decrease letter count by 1 for given letter
    this.letterCounts[letter] -= 1;
    // check if value is now zero
    if (this.letterCounts[letter] === 0) {
      // remove key from alphabet obj
      delete this.letterCounts[letter];
    }
  }
}
