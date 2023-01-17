export const drawLetters = () => {
  // Implement this method for wave 1
  const letter_pool = [];

  const letter_counts = {
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
  
  for (let [key,value] of Object.entries(letter_counts)) {
    for (let i = 0; i < value; ++i) {
      letter_pool.push(key);
    }
  }

  const shuffle = function (letter_pool) {
    letter_pool.sort(() => Math.random() - 0.5);
  }
  
  shuffle(letter_pool);
  const letter_pool_selection = letter_pool.slice(0, 10);
  return letter_pool_selection;
};

const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

const scoreWord = (word) => {
  // Implement this method for wave 3
};

const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
