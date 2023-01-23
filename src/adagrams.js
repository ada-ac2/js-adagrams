const letters = [
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
const quantities = [
  9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1,
];
const totalAppareance = quantities.reduce((sumElem, elem) => sumElem + elem);

export const drawLetters = () => {
  // create drawing pool
  let letterPool = [];
  for (let index = 0; index < quantities.length; ++index) {
    let tempArr = Array(quantities[index]).fill(letters[index]);
    letterPool.push(...tempArr);
  }
  // start drawing
  let selectedLetters = [];
  while (selectedLetters.length < 10) {
    let randomIndex = Math.floor(Math.random() * totalAppareance);
    let currentLetter = letterPool[randomIndex];
    if (currentLetter != "_") {
      selectedLetters.push(currentLetter);
      letterPool[randomIndex] = "_";
    }
  }
  return selectedLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // check if all letters in input exists in lettersInHand
  let tempLettersInHand = `${lettersInHand}`;
  for (let letter of input) {
    if (tempLettersInHand.includes(letter)) {
      tempLettersInHand = tempLettersInHand.replace(letter, "");
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};
/*
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
*/
