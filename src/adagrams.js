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

const scores = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
  10,
];

export const drawLetters = () => {
  // create drawing pool
  let letterPool = [];
  const totalAppareance = quantities.reduce((sumElem, elem) => sumElem + elem);
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
  for (const letter of input) {
    if (tempLettersInHand.includes(letter)) {
      tempLettersInHand = tempLettersInHand.replace(letter, "");
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // create score chart
  let scoreChart = {};
  letters.forEach((letter, index) => (scoreChart[letter] = scores[index]));
  // compute points
  let result = 0;
  for (const letter of word) {
    result += scoreChart[letter.toUpperCase()];
  }
  if (word.length >= 7 && word.length <= 10) {
    result += 8;
  }
  return result;
};

export const highestScoreFrom = (words) => {
  // general rule
  let wordScores = {};
  words.forEach((word) => (wordScores[word] = scoreWord(word)));
  let max = Math.max(...Object.values(wordScores));
  let maxRecords = [];
  for (const record in wordScores) {
    if (wordScores[record] === max) {
      maxRecords.push(record);
    }
  }
  // check if there is a tie
  if (maxRecords.length === 1) {
    return { score: max, word: maxRecords[0] };
  } else {
    // records with 10 letters
    let tenLetters = [];
    for (const record of maxRecords) {
      if (record.length === 10) {
        tenLetters.push(record);
      }
    }
    if (tenLetters.length === 0) {
      // prefer the word with the fewest letters
      let min = 100;
      let minRecord;
      for (const record of maxRecords) {
        if (record.length < min) {
          min = record.length;
          minRecord = record;
        }
      }
      return { score: max, word: minRecord };
    } else {
      return { score: max, word: tenLetters[0] };
    }
  }
};
