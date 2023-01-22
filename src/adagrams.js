import { Alphabet } from "./alphabet.js";

export const drawLetters = () => {
  // initialize player hand
  let hand = [];
  // initialize alphabet object
  let alphabet = new Alphabet();
  // draw 10 letters
  for (let i = 0; i < 10; ++i) {
    // get array of letters (keys) from alphabet object
    const keys = Object.keys(alphabet.object);
    // randomly pick one letter (key)
    const letter = keys[Math.floor(Math.random() * keys.length)];
    // add letter to hand
    hand.push(letter);
    // letter value in alphabet object
    alphabet.decreaseValue(letter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // convert input string to array
  const inputArr = [...input];
  // make mutable copy of letters in hand
  let handArr = [...lettersInHand];
  // check each letter in input
  inputArr.forEach((letter) => {
    if (lettersInHand.includes(letter)) {
    }
  });

  // return true if every letter in input in lettersInHand
  return inputArr.every((letter) => lettersInHand.includes(letter));
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
