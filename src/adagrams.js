export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPool = [];

  const letterCounts = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
  }
  
  for (let [key,value] of Object.entries(letterCounts)) {
    for (let i = 0; i < value; ++i) {
      letterPool.push(key);
    }
  }

  const shuffle = function (letterPool) {
    letterPool.sort(() => Math.random() - 0.5);
  }
  
  shuffle(letterPool);
  const letterPoolSelection = letterPool.slice(0, 10);
  return letterPoolSelection;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let valid = false;

  let word = input.toUpperCase();

  // Create object of letter frequency for lettersInHand
  const letterBankCount = {}

  for (const letter of lettersInHand) {
    if (letter in letterBankCount) {
      letterBankCount[letter] += 1;
    } else {
      letterBankCount[letter] = 1;
    }
  }

  // Create object of letter frequency for word
  const wordCount = {}

  for (const letter of word) {
    if (letter in wordCount) {
      wordCount[letter] += 1;
    } else {
      wordCount[letter] = 1;
    }
  }

  // Check that word letter frequency complies with lettersInHand

  for (const key in wordCount) {
    if (!(key in letterBankCount)) {
      return false;
    } else if (wordCount[key] > letterBankCount[key]) {
      return false;
    } else if (wordCount[key] <= letterBankCount[key]) {
      valid = true;
    }
  }

  return valid;

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word === '') {
    return 0;
  }
  
  word = word.toUpperCase();

  let points = 0;

  const scoreChart = {
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
    'P': 3, 
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

  for (const letter of word) {
    points += scoreChart[letter];
  }

  if (word.length >= 7 && word.length <= 10) {
    points += 8;
  }

  return points;

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const scores = {};

  for (let word of words) {
    word = word.toUpperCase();
    if (!(word in scores)) {
      scores[word] = scoreWord(word)
    }
  }

  let highestScore = 0;
  let winner;

  for (const wordEntry in scores) {

    if (scores[wordEntry] > highestScore) {
      highestScore = scores[wordEntry];
      winner = wordEntry;
    } else if (scores[wordEntry] === highestScore) {
      if (winner.length === 10) {
        break;
      } else if (wordEntry.length === 10 || wordEntry.length < winner.length) {
        winner = wordEntry;
      }
    }
  }

  const winningObject = {
    "word": winner,
    "score": scores[winner],
  }

  return winningObject;

};
