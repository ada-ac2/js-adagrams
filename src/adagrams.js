import { Alphabet } from "./alphabet.js";
import { ScoreChart } from "./scoreChart.js";

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
  /////////// HASH TABLE IMPLEMENTATION - OPPORTUNITY TO REFACTOR /////////////////
  // convert input string to array
  const inputArr = [...input.toUpperCase()];
  // make mutable copy of letters in hand
  let handArr = [...lettersInHand.toUpperCase()];
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
  // initialize word score
  let score = 0;
  // initialize score chart
  const scoreChart = new ScoreChart();
  // convert word string to array
  const wordArr = [...word.toUpperCase()];
  // check each letter in word
  wordArr.forEach((letter, i) => {
    score += scoreChart.object[letter];
    if (i === 7) {
      score += 8;
    }
  });
  // for (let letter of wordArr) {
  // look up letter in score chart and add score
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
