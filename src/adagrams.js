import { Alphabet } from "./modules/Alphabet.js";
import { Score } from "./modules/Score.js";

export const drawLetters = () => {
  // initialize player hand
  let hand = [];
  // initialize alphabet
  let alphabet = new Alphabet();
  // draw 10 letters
  for (let i = 0; i < 10; ++i) {
    // get array of letters (keys) from alphabet object
    const keys = Object.keys(alphabet.letterCounts);
    // randomly pick one letter (key)
    const letter = keys[Math.floor(Math.random() * keys.length)];
    // add letter to hand
    hand.push(letter);
    // letter value in alphabet object
    alphabet.decreaseLetterCount(letter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // convert input string to array
  const inputArr = [...input.toUpperCase()];
  // make mutable copy of letters in hand
  let handArr = [...lettersInHand];
  for (let i = 0; i < inputArr.length; i++) {
    // collect letter
    const letter = inputArr[i];
    // check if input letter is in hand
    if (handArr.includes(letter)) {
      // collect index of letter
      const index = handArr.indexOf(letter);
      // remove letter from copy of letters in hand - prevent duplication
      handArr.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // check for word input
  if (typeof word === "undefined") {
    return 0;
  } else {
    return new Score().calculateWordScore(word);
  }
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
