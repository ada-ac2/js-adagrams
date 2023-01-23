"use strict";
const letterPool = {
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
const letterValue = {
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
const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const drawLetters = () => {
  const letters = [];
  let letter_pool_copy = { ...letterPool };
  let keys = Object.keys(letter_pool_copy);
  while (letters.length < 10) {
    let letter = keys[Math.floor(Math.random() * keys.length)];

    if (letter_pool_copy[letter] > 0) {
      letters.push(letter);
      letter_pool_copy[letter] -= 1;
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandCopy = [...lettersInHand];
  const wordArray = input.split("");
  for (let i = 0; i < wordArray.length; i++) {
    let letter = wordArray[i];
    if (lettersInHandCopy.includes(letter)) {
      // lettersInHandCopy.filter((item) => item !== letter);
      lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  const strOfChars = word.toUpperCase();
  const strOfCharsArray = strOfChars.split("");

  for (let i = 0; i < strOfChars.length; i++) {
    let letter = strOfCharsArray[i];
    if (alpha.includes(letter)) {
      score += letterValue[letter];
    }
  }
  if (strOfChars.length > 6 && strOfChars.length < 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
