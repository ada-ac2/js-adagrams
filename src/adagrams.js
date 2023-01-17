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

  // Create dictionary of letter frequency for lettersInHand
  const letterBankCount = {}

  for (const letter of lettersInHand) {
    if (letterBankCount.hasOwnProperty(letter)) {
      letterBankCount[letter] += 1;
    } else {
      letterBankCount[letter] = 1;
    }
  }

  // Create dictionary of letter frequency for word
  const wordCount = {}

  for (const letter of word) {
    if (wordCount.hasOwnProperty(letter)) {
      wordCount[letter] += 1;
    } else {
      wordCount[letter] = 1;
    }
  }

  // Check that word letter frequency complies with lettersInHand

  for (let [key,value] of Object.entries(wordCount)) {
    if (!letterBankCount.hasOwnProperty(key)) {
      return false;
    } else if (wordCount[key] > letterBankCount[key]) {
      return false;
    } else if (wordCount[key] <= letterBankCount[key]) {
      valid = true;
    }
  }

  return valid;

};

const scoreWord = (word) => {
  // Implement this method for wave 3
};

const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
