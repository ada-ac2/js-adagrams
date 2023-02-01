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

const LETTER_VALUES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 2,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const drawLetters = () => {
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
  let score = 0;
  for (const letter of word) {
    score += LETTER_VALUES[letter.toUpperCase()];
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let winner = {
    word: words[0],
    score: 0,
  };
  for (const word of words) {
    let score = scoreWord(word);
    if (score > winner.score) {
      winner = { word, score };
    } else if (score === winner.score) {
      if (winner.word.length === 10) {
        //pass
      } else if (word.length === 10 && winner.word.length !== 10) {
        winner = { word, score };
      } else if (word.length < winner.word.length) {
        winner = { word, score };
      }
    }
  }
  return winner;
};
