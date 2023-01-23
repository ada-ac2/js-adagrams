export const drawLetters = () => {
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
  const LETTER_CLONE = { ...LETTER_POOL };
  const letters = Object.keys(LETTER_CLONE);
  const res = [];

  while (res.length < 10) {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    if (LETTER_CLONE[letter] > 0) {
      res.push(letter);
      LETTER_CLONE[letter]--;
    }
  }
  return res;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandClone = [...lettersInHand];
  for (const letter of input) {
    const i = lettersInHandClone.indexOf(letter);
    if (i !== -1) {
      lettersInHandClone.splice(i, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
