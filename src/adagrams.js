export const drawLetters = () => {
  // Implement this method for wave 1
  // Create dictionaries of letters and number of each letter
  const POOL_LETTERS_DICT = [
    { letter: "A", count: 9 },
    { letter: "B", count: 2 },
    { letter: "C", count: 2 },
    { letter: "D", count: 4 },
    { letter: "E", count: 12 },
    { letter: "F", count: 2 },
    { letter: "G", count: 3 },
    { letter: "H", count: 2 },
    { letter: "I", count: 9 },
    { letter: "J", count: 1 },
    { letter: "K", count: 1 },
    { letter: "L", count: 4 },
    { letter: "M", count: 2 },
    { letter: "N", count: 6 },
    { letter: "O", count: 8 },
    { letter: "P", count: 2 },
    { letter: "Q", count: 1 },
    { letter: "R", count: 6 },
    { letter: "S", count: 4 },
    { letter: "T", count: 6 },
    { letter: "U", count: 4 },
    { letter: "V", count: 2 },
    { letter: "W", count: 2 },
    { letter: "X", count: 1 },
    { letter: "Y", count: 2 },
    { letter: "Z", count: 1 },
  ];
  let availableListOfLetters = [];
  for (const letter of POOL_LETTERS_DICT) {
    for (let i = 0; i < letter["count"]; ++i) {
      availableListOfLetters.push(letter["letter"]);
    }
  }

  let lettersInHand = [];
  for (let i = 0; i < 10; ++i) {
    let oneLetter =
      availableListOfLetters[
        Math.floor(Math.random() * availableListOfLetters.length)
      ];
    lettersInHand.push(oneLetter);
    availableListOfLetters.pop(oneLetter);
  }

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
