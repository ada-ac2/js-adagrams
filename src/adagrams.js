const sizeOfDraw = 10;
const letterValues = {
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

// const removeElementFromArray = (array, element) => {
//   if(!array) {
//     return []
//   }
//   if(array[0]===element) {
//     array.shift();
//     return array;
//   }
//   if(array[array.length-1]===element){
//     array.pop();
//     return array;
//   }
//   //Find element
//   let i = 0;
//   for(i; i< array.length; ++i){
//     if(array[i]===element){
//       break;
//     }
//   }
//   for(i; i < array.length-1; ++i){
//     let val = array[i+1];
//     array[i] = val;
//   }
//   array.length--;

//   return array

// }

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

  while (draw.length < sizeOfDraw) {
    let randNum = getRandomNumber(poolLetters.length);
    draw.push(poolLetters[randNum]);
    poolLetters.splice(randNum, 1);
  }
  return draw;
};

const createLettersInHandDict = (lettersInHandArray) => {
  const lettersDict = {};
  for (let i = 0; i < lettersInHandArray.length; ++i) {
    if (lettersDict[lettersInHandArray[i]] === undefined) {
      lettersDict[lettersInHandArray[i]] = 1;
    } else {
      lettersDict[lettersInHandArray[i]]++;
    }
  }
  return lettersDict;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  if (!input || lettersInHand === []) {
    return false;
  }
  const letterBank = createLettersInHandDict(lettersInHand);
  input.toUpperCase();
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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
