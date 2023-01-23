export class Score {
  constructor() {
    this.scoreChart = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    };
  }
  calculateWordScore(word) {
    // initialize word score
    let wordScore = 0;
    // convert word string to array
    const wordArr = [...word.toUpperCase()];
    // check each letter in word
    wordArr.forEach((letter) => {
      // look up letter score in scoreChart
      const letterScore = this.scoreChart[letter];
      // add to word score
      wordScore += letterScore;
    });
    if (word.length >= 7) {
      wordScore += 8;
    }
    return wordScore;
  }
}
