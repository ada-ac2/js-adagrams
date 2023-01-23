export const drawLetters = () => {
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
    let randomIndexLetter = Math.floor(
      Math.random() * availableListOfLetters.length
    );
    let oneLetter = availableListOfLetters[randomIndexLetter];
    availableListOfLetters.splice(randomIndexLetter, 1);
    lettersInHand.push(oneLetter);
  }

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let checkedWord = [];
  input = input.toUpperCase();

  for (let letter of input) {
    const indexOfLetter = lettersInHand.indexOf(letter);
    if (indexOfLetter !== -1) {
      lettersInHand.splice(indexOfLetter, 1);
      checkedWord.push(letter);
    }
  }
  lettersInHand += checkedWord;
  if (checkedWord.join("") === input) {
    return true;
  }
  return false;
};

export const scoreWord = (word) => {
  let user_points = 0;
  const SCORE_CHART = [
    { letter: "A", value: 1 },
    { letter: "B", value: 3 },
    { letter: "C", value: 3 },
    { letter: "D", value: 2 },
    { letter: "E", value: 1 },
    { letter: "F", value: 4 },
    { letter: "G", value: 2 },
    { letter: "H", value: 4 },
    { letter: "I", value: 1 },
    { letter: "J", value: 8 },
    { letter: "K", value: 5 },
    { letter: "L", value: 1 },
    { letter: "M", value: 3 },
    { letter: "N", value: 1 },
    { letter: "O", value: 1 },
    { letter: "P", value: 3 },
    { letter: "Q", value: 10 },
    { letter: "R", value: 1 },
    { letter: "S", value: 1 },
    { letter: "T", value: 1 },
    { letter: "U", value: 1 },
    { letter: "V", value: 4 },
    { letter: "W", value: 4 },
    { letter: "X", value: 8 },
    { letter: "Y", value: 4 },
    { letter: "Z", value: 10 },
  ];
  if (word.length === 0) {
    return 0;
  }
  word = word.toUpperCase();
  if (word.length >= 7) {
    user_points = 8;
  }
  for (let letterW of word) {
    const letterObj = SCORE_CHART.find(({ letter }) => letter === letterW);
    user_points += letterObj.value;
  }

  return user_points;
};

export const highestScoreFrom = (words) => {
  let usersScore = 0;
  let maxScore = 0;
  let maxWord = "";
  for (let word of words) {
    usersScore = scoreWord(word);
    if (usersScore > maxScore) {
      maxScore = usersScore;
      maxWord = word;
    } else if (usersScore === maxScore) {
      let lengthWord = word.length;
      let maxLengthWord = maxWord.length;
      if (lengthWord < maxLengthWord || lengthWord === 10) {
        if (maxLengthWord !== 10) {
          maxScore = usersScore;
          maxWord = word;
        }
      }
    }
  }
  let winWord = { word: maxWord, score: maxScore };
  return winWord;
};
