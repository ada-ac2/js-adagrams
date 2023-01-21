
export const drawLetters = () => {
  let letters = [];
  let letter_pool = {
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
  for (let i = 0; i < 10; ++i) {
    let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    if ( letter_pool[letter] > 0) {
        letter_pool[letter] -= 1;
        letters.push(letter);
      } else {
        letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      };
  };
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();

  let letterFreq = {};
  for (let i=0; i < lettersInHand.length; i++) {
    letterFreq[lettersInHand[i]] = (letterFreq[lettersInHand[i]] || 0) +1 ;
  };
  
  for (let i=0; i < input.length; i++) {
    let letter = input[i];
    if ((letter in letterFreq)&&(letterFreq[letter] > 0)) {
      letterFreq[letter] -= 1;
    } else {
      return false;
    }
  };
  return true;
};
const LETTER_SCORE = {
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

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let point = 0;
  
  for (let i=0; i < word.length; ++i){
    point += LETTER_SCORE[word[i]];
  }
  
  if(word.length >= 7){
    point += 8;
  }
  
  return point;
};

export const highestScoreFrom = (words) => {
    let highest = {
      word: "",
      score: 0
    }

    for (let word of words) {
      let point = scoreWord(word);

      if (point > highest.score){
        highest.word = word;
        highest.score = point;
      } else if (point === highest.score) {
        if(highest.word.length === 10){
          continue;
        } else if ((word.length === 10)||(highest.word.length > word.length)){
          highest.word = word;
          highest.score = point;
        };
      };
    };

  return highest
};
