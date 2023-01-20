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

const LEN = 26;

const scoreChart = {
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
  P: 3,
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
  let letterFrequency = {};
  let aHandOfLetters = [];
  while (aHandOfLetters.length < 10) {
    let randomNum = Math.floor(Math.random() * LEN);
    let randomLetter = String.fromCharCode(randomNum + 65);

    if (
      letterFrequency.hasOwnProperty(randomLetter) &&
      letterFrequency[randomLetter] < LETTER_POOL[randomLetter]
    ) {
      aHandOfLetters.push(randomLetter);
      letterFrequency[randomLetter] += 1;
    } else if (!letterFrequency.hasOwnProperty(randomLetter)) {
      aHandOfLetters.push(randomLetter);
      letterFrequency[randomLetter] = 1;
    }
  }
  return aHandOfLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let found = 0;
  for (let char of input) {
    for (let i in lettersInHand) {
      if (char === lettersInHand[i]) {
        lettersInHand[i] = "";
        found++;
        break;
      }
    }
  }
  if (found === input.length) {
    return true;
  }
  return false;
};

export const scoreWord = (word) => {
  // if (word.length === 0) {
  //   return 0;
  // }
  let totalPoints = 0;
  for (let char of word) {
    totalPoints += scoreChart[char.toUpperCase()];
  }
  if (word.length >= 7) {
    totalPoints += 8;
  }
  return totalPoints;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
