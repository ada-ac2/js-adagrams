export const drawLetters = () => {
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
  const letters = Object.keys(letterPool);
  const hand = [];
  let i = 0;

  while (i < 10) {
    let drawnLetter = letters[Math.floor(Math.random() * letters.length)];
    if (letterPool[drawnLetter] > 0) {
      hand.push(drawnLetter);
      letterPool[drawnLetter]--;
      i++;
    }
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let usesOnlyAvailableLetters = true;
  [...input].forEach((letter) => {
    const index = lettersInHand.indexOf(letter);
    // indexOf method return -1 if letter not found
    if (index != -1) {
      // for splice, need to specify only 1 letter should be removed
      lettersInHand.splice(index, 1);
    } else {
      usesOnlyAvailableLetters = false;
    }
  });
  return usesOnlyAvailableLetters;
};

export const scoreWord = (word) => {
  // stored letterScores as a dict so code is flexible and changes can easily be made
  const letterScores = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };
  let score = 0;

  [...word].forEach((letter) => {
    score += letterScores[letter.toUpperCase()];
  });
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // const scores = words.map((word) => scoreWord(word));
  // // sort scores in descending order
  // scores.sort((a, b) => a - b);
  let max = 0;
  let winner;
  for (let i = 0; i < words.length; i++) {
    let score = scoreWord(words[i]);
    if (score > max) {
      winner = { word: words[i], score: score };
      max = score;
    } else if (score == max) {
      if (winner.word.length == 10) {
        return winner;
      } else if (words[i].length == 10) {
        winner = { word: words[i], score: score };
        return winner;
      } else if (words[i].length < winner.word.length) {
        winner = { word: words[i], score: score };
      }
    }
  }
  return winner;
};
