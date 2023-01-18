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

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
