const SIZE_OF_DRAW = 10;
const LETTER_VALUES = {
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

const genPoolLetters = (poolRulesObj) => {
  const myPool = [];
  for (const letter in poolRulesObj) {
    for (let i = 0; i < poolRulesObj[letter]; ++i) {
      myPool.push(letter);
    }
  }
  return myPool;
};

//Gets a random number excluding the maxNum
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

export const drawLetters = () => {
  const poolRules = {
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
  const draw = [];
  const poolLetters = genPoolLetters(poolRules);

  while (draw.length < SIZE_OF_DRAW) {
    let randNum = getRandomNumber(poolLetters.length);
    draw.push(poolLetters[randNum]);
    poolLetters.splice(randNum, 1);
  }
  return draw;
};

const createLettersInHandDict = (lettersInHandArray) => {
  const lettersDict = {};
  for (let i = 0; i < lettersInHandArray.length; ++i) {
    let char = lettersInHandArray[i];
    if (lettersDict[char] === undefined) {
      lettersDict[char] = 1;
    } else {
      lettersDict[char]++;
    }
  }
  return lettersDict;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  if (!input || lettersInHand === []) {
    return false;
  }
  const letterBank = createLettersInHandDict(lettersInHand);
  input = input.toUpperCase();
  for (let i = 0; i < input.length; ++i) {
    let letter = input[i];
    if (letterBank[letter] == undefined) {
      return false;
    }
    if (letterBank[letter] == 0) {
      return false;
    }
    letterBank[letter]--;
  }
  return true;
};

export const scoreWord = (word) => {
  if (!word) {
    return 0;
  }
  let points = 0;
  word = word.toUpperCase();
  for (let i = 0; i < word.length; ++i) {
    let letter = word[i];
    if (LETTER_VALUES[letter] != undefined) {
      // If its undefined means letter is a special character
      points += LETTER_VALUES[letter];
    }
  }

  if (word.length >= 7 && word.length <= SIZE_OF_DRAW) {
    points += 8;
  }
  return points;
};

export const highestScoreFrom = (words) => {
  if (!words) {
    return {};
  }

  let maxScore = 0;
  const wordScores = {}; //will store all the highscored words
  words.forEach((word) => {
    let score = scoreWord(word);
    if (score > maxScore) {
      maxScore = score;
      wordScores[score] = new Array({ score, word });
    } else if (score === maxScore) {
      wordScores[score].push({ score, word });
    }
  });

  const maxScoreWords = wordScores[maxScore];
  let winWord = maxScoreWords[0];
  if (maxScoreWords.length > 1) {
    let minLen = winWord["word"].length;
    for (let i = 0; i < maxScoreWords.length; ++i) {
      let word = maxScoreWords[i]["word"];
      if (word.length === SIZE_OF_DRAW) {
        winWord = maxScoreWords[i];
        break;
      }
      if (word.length < minLen) {
        minLen = word.length;
        winWord = maxScoreWords[i];
      }
    }
  }

  return winWord;
};
