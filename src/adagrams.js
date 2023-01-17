const LETTER_POOL = {
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


export const drawLetters = () => {
  let letters = [];
  for (let i = 0; i < 10; ++i) {
    let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    if (LETTER_POOL[letter] > 0) {
        LETTER_POOL[letter] -= 1;
        letters.push(letter);
      } else {
        letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      };
  };
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
