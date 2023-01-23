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

const old_score_chart = {
  "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3,
  "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10
};

export class Adagrams{
  constructor(){
    this.letterPool = [];
    for (let alphabet in letterMap){
      let times = letterMap[alphabet];
      for (let i=0; i<times; ++i)
      this.letterPool.push(alphabet);
    }
    this.score_chart = new Map(Object.entries(old_score_chart));
  }

  drawLetters(){
    const letterBank = [];
    let length = this.letterPool.length;
  
    while (letterBank.length < 10){
    let index = Math.floor(Math.random()*length);
    letterBank.push(this.letterPool[index]);
    length --;
    [this.letterPool[index], this.letterPool[length]] = [this.letterPool[length],this.letterPool[index]];
    }
    return letterBank;
  };

  usesAvailableLetters(input, lettersInHand){
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

  scoreWord(word){
    let totalScore = 0;
    for (let cha of word){
      cha = cha.toUpperCase();
      let score = this.score_chart.get(cha);
      totalScore += score;
    }
    if (word.length > 6){
      totalScore += 8;
    }
    return totalScore;
  };

  highestScoreFrom(words){
    let cur_winner;
    let cur_score = 0;
  
    for (const word of words){
      let score = this.scoreWord(word);
      if (score > cur_score){
        cur_winner = word;
        cur_score = score;
      }
      else if (score == cur_score){
        if (cur_winner.length === 10){
          continue;
        }
        else if (word.length === 10 || word.length < cur_winner.length){
          cur_winner = word;
        }
      }
    }
    return {word: cur_winner, score: cur_score};
  };
}