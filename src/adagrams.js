export const drawLetters = () => {
  // Implement this method for wave 1
  let alphabet_pool = {
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
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hand = [];
  while (hand.length < 10) {
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (alphabet_pool[letter] > 0) {
      hand.push(letter);
      alphabet_pool[letter]--;
    }
  }
  return hand;
};

const frequency = (inputI) => {
  const counts = {};
  for (const elm of inputI) {
    counts[elm] = counts[elm] ? counts[elm] + 1 : 1;
  }

  return counts;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const input_count = frequency(input);
  const hand_count = frequency(lettersInHand);
  for (const letter of input) {
    if (lettersInHand.indexOf(letter) == -1) {
      return false;
    } else if (hand_count[letter] < input_count[letter]) {
      return false;
    }
  }
  return true;
};

const letter_scores = {
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

export const scoreWord = (word) => {
  const score = word
    .toUpperCase()
    .split("")
    .reduce((accum, letter) => accum + letter_scores[letter], 0);
  if (score) {
    return word.length > 6 ? score + 8 : score;
  }
  return 0;
};

export const highestScoreFrom = (words) => {
  const scores = {};
  for (const word of words) {
    scores[word] = scoreWord(word);
  }
  const max_score = Math.max.apply(Math, Object.values(scores));
  let winning_words = [];
  for (const word of words) {
    if (scores[word] === max_score) {
      winning_words.push(word);
    }
  }
  winning_words.sort(function (a, b) {
    return a.length - b.length;
  });
  if (winning_words[winning_words.length - 1].length === 10) {
    winning_words = winning_words.filter((word) => word.length == 10);
  }
  return { score: max_score, word: winning_words[0] };
};
