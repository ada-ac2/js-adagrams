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

const letterValues = {
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 2, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
}

export const drawLetters = () => {
  let letterPoolCopy = JSON.parse(JSON.stringify(letterPool));
  const letters = [];

  const keys = Object.keys(letterPoolCopy);
  while (letters.length < 10) {
    let letter = keys[Math.floor(Math.random() * keys.length)];

    if (letterPoolCopy[letter] > 0) {
      letters.push(letter);
      letterPoolCopy[letter] -= 1;
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterBankCopy = JSON.parse(JSON.stringify(lettersInHand));

  for (let i = 0; i < input.length; i++) {
    if (letterBankCopy.includes(input[i])) {
      delete letterBankCopy[i];
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0
  for (const letter of word) {
    score += letterValues[letter.toUpperCase()]
  }

  if (word.length > 6 && word.length < 11){
    score += 8
  }
  return score
};

export const highestScoreFrom = (words) => {
  let highest = {word: words[0], score: 0};

  for (const word of words) {
    let score = scoreWord(word);
    if (score > highest.score) {
      highest.word = word;
      highest.score = score;
    } else if (score === highest.score) {
      if (highest.word.length === 10) {
        highest = highest;
      } else if (word.length === 10 && highest.word.length !== 10) {
        highest.word = word;
        highest.score = score;
      } else if (word.length < highest.word.length) {
        highest.word = word;
        highest.score = score;
      }
    }
  }
  return highest
};
