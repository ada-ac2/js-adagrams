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

const scoreChart ={
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

export const drawLetters = () => {
  // initial drawLetters, cloneLetterPool, letters
  let drawLetters = [];
  let cloneLetterPool = {...letterPool};
  let letters = Object.keys(cloneLetterPool);

  // for loop 10 times
  for (let i=0;i<10;++i){
    // get random letter in the pool
    let randomLetter = letters[Math.floor(Math.random()*letters.length)];
    // check the value of letter in the pool
    if (cloneLetterPool[randomLetter]>0){
      cloneLetterPool[randomLetter]--;
      drawLetters.push(randomLetter);
      };
  };
  return drawLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputFreq = {};
  let lettersInHandFreq = {};
  
  for (let letter in lettersInHand) {
    if (letter in lettersInHandFreq) {
      lettersInHandFreq[letter] += 1;
    }else{
      lettersInHandFreq[letter] = 1;
    }
  };
  
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
