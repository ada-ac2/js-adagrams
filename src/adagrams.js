const letterMap = {
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
};

const letterPool = [];
for (let alphabet in letterMap){
  let times = letterMap[alphabet];
  for (let i=0; i<times; ++i)
  letterPool.push(alphabet);
}


export const drawLetters = () => {
  const letterBank = [];
  let length = letterPool.length;

  while (letterBank.length < 10){
  let index = Math.floor(Math.random()*length);
  letterBank.push(letterPool[index]);
  length --;
  [letterPool[index], letterPool[length]] = [letterPool[length],letterPool[index]];
  
  }
  return letterBank;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const letterCount = new Map();
  for (const letter of lettersInHand){
      let count = letterCount.get(letter);
      if (count === undefined){
        count = 0;
      }
      count ++;
      letterCount.set(letter, count);
  }
  
  for (const cha of input){
    let cur_count = letterCount.get(cha);
    if (cur_count === undefined || cur_count === 0){
        return false;
    }
    cur_count --;
    letterCount.set(cha, cur_count);
  }
  return true;

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
