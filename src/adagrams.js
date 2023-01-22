"use strict";

export const drawLetters = () => {
  const lettersPool = [
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "D",
    "D",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "J",
    "K",
    "L",
    "L",
    "L",
    "L",
    "M",
    "M",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "P",
    "P",
    "Q",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "S",
    "S",
    "S",
    "S",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "U",
    "U",
    "U",
    "U",
    "V",
    "V",
    "W",
    "W",
    "X",
    "Y",
    "Y",
    "Z",
  ];
  const lettersPoolDeepcopy = JSON.parse(JSON.stringify(lettersPool));
  const hand = [];

  for (let i = 0; i < 10; i++) {
    const random_number = Math.floor(
      Math.random() * lettersPoolDeepcopy.length
    );
    hand.push(lettersPoolDeepcopy[random_number]);
    lettersPoolDeepcopy.splice(random_number, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  for (const letter of input) {
    if (lettersInHand.includes(letter)) {
      const index = lettersInHand.indexOf(letter);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const lettersValue = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
  let score = 0;
  word = word.toUpperCase();
  for (const letter of word) {
    score += lettersValue[letter];
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

// ~~~~~~~~~~~~~~~~~~~ pseudo code for wave 4 ~~~~~~~~~~~~~~~~~~
// - create an empty dictionary
// - loop over the list "words": add the word as the key to the dict and the score (accessed through the last function) as the value
// -  create an empty dcit: wordsWithHighestScore
// - find these words manually in a for loop (after finding the maximum value by the builtin function) and add them as the keys and their length as the value
// - if length of the dict is one: return this word
// - else: find the words with the score 10 and put them in a list --> if the length is one --> return this word
// - find the minumum word length in the dict and find out how many words share that length by adding these word to a dict where the values are the indeces in the original list
//- --> if only one has the minLength --> return this word
//- return the min of this dictionary


const createScoresObject = (words) => {
  const scoresObject = {};
  for (const word of words) {
    scoresObject[word] = scoreWord(word);
  }
  return scoresObject;
};

const createWordsWithMaxScoreObject = (scoresObject, maxScore) => {
  const wordsWithMaxScore = {};
  for (const word in scoresObject) {
    if (scoresObject[word] === maxScore) {
      wordsWithMaxScore[word] = word.length;
    }
  }
  return wordsWithMaxScore;
};

const findIfOneWordWith10Letters = (wordsWithMaxScore) => {
  let wordsWithMaxScore10Letters = 0;
  let winnerWord;
  for (const word of Object.keys(wordsWithMaxScore)) {
    if (wordsWithMaxScore[word] === 10) {
      wordsWithMaxScore10Letters++;
      winnerWord = word;
    }
  }
  if (wordsWithMaxScore10Letters === 1) {
    return winnerWord;
  }
  return "";
};

const findWordsWithMinLength = (wordsWithMaxScore, words) => {
  const wordLengthsArray = Object.values(wordsWithMaxScore);
  const minWordLength = Math.min(...wordLengthsArray);
  const wordsWithMinLength = {};
  for (const word in wordsWithMaxScore) {
    if (wordsWithMaxScore[word] === minWordLength) {
      wordsWithMinLength[word] = words.indexOf(word);
    }
  }
  return wordsWithMinLength;
};

const findWordWithMinIndex = (wordsWithMinLength) => {
  const indexArray = Object.values(wordsWithMinLength);
  const minIndex = Math.min(...indexArray);
  for (const word in wordsWithMinLength) {
    if (wordsWithMinLength[word] === minIndex) {
      return word;
    }
  }
};

export const highestScoreFrom = (words) => {
  // create scoresObject where the keys are the words and the values are the scores
  const scoresObject = createScoresObject(words);
  const scoresArray = Object.values(scoresObject);
  const maxScore = Math.max(...scoresArray);

  // create object wordsWithMaxScore 
  // where the keys are the words which have the max score
  // and the values are the length of each word
  const wordsWithMaxScore = createWordsWithMaxScoreObject(
    scoresObject,
    maxScore
  );
  if (Object.keys(wordsWithMaxScore).length === 1) {
    return {
      word: Object.keys(wordsWithMaxScore)[0],
      score: maxScore,
    };
  }

  //the function findIfOneWordWith10Letters() returns the word 
  // which is made of 10 letters if there's only one among the words with maxScore
  // else the function returns an empty string
  const oneWordWith10Letters = findIfOneWordWith10Letters(wordsWithMaxScore);
  if (oneWordWith10Letters) {
    return {
      word: oneWordWith10Letters,
      score: maxScore,
    };
  }

  // create object wordsWithMinLength where the keys are the words
  // with the smallest length and the values are the words' indices 
  // in the input array
  const wordsWithMinLength = findWordsWithMinLength(wordsWithMaxScore, words);
  if (Object.keys(wordsWithMinLength).length === 1) {
    return {
      word: Object.keys(wordsWithMinLength)[0],
      score: maxScore,
    };
  }

  return {
    word: findWordWithMinIndex(wordsWithMinLength),
    score: maxScore,
  };
};