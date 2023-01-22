export const drawLetters = () => {
  // Implement this method for wave 1
  let lp_copy = JSON.parse(JSON.stringify(LETTER_POOL));
  let drawLetters = [];
  const sum = sumOfValues(lp_copy);
  while (drawLetters.length < 10) {
    const index = Math.floor(Math.random() * (sum + 1));
    const letter = whichLetter(index, lp_copy);
    //const letter = Object.keys(lp_copy)[index];
    if (lp_copy[letter] > 0) {
      drawLetters.push(letter);
      lp_copy[letter]--;
    }
  }
  return drawLetters;
};

const whichLetter = (index, lp_copy) => {
  for (let letter of Object.keys(lp_copy)) {
    if (index === 0) {
      return letter;
    } else {
      index -= lp_copy[letter];
    }
  }
};

const sumOfValues = (lp_copy) => {
  let sum = 0;
  for (let val of Object.values(lp_copy)) {
    sum += val;
  }
  return sum;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      const i = lettersInHand.indexOf(letter);
      lettersInHand.splice(i, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  for (let letter of word) {
    score += LETTER_VALUES[letter.toUpperCase()];
  }
  if (word.length > 6 && word.length < 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highest_score = 0;
  let highest_score_word = words[0];
  for (let word of words) {
    let word_score = scoreWord(word);
    if (word_score > highest_score) {
      highest_score = word_score;
      highest_score_word = word;
    } else if (word_score === highest_score) {
      // there is a tie
      if (highest_score_word.length === 10) {
        continue;
      } else if (word.length === 10 && highest_score_word.length !== 10) {
        highest_score = word_score;
        highest_score_word = word;
      } else if (word.length < highest_score_word.length) {
        highest_score_word = word;
        highest_score = word_score;
      }
    }
  }
  const highest_scores_lst = {
    word: highest_score_word,
    score: highest_score,
  };
  return highest_scores_lst;
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
