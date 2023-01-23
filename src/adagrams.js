class Adagrams{
  LETTER_POOL = {
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

  LETTER_SCORE = {
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
  
  constructor() {
    this.input = "";
    this.word = "";
    this.highest = {
      word: "",
      score: 0
    };
    
    this.lettersInHand = new Array();

  };

  drawLetters = () => {
    
    while (this.lettersInHand.length < 10) {
      let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      
      if ( this.LETTER_POOL[letter] > 0) {
          this.LETTER_POOL[letter] -= 1;
          this.lettersInHand.push(letter);
        }
      letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        
    };
    return this.lettersInHand;
  };
  
  usesAvailableLetters = (input, lettersInHand) => {
    this.input = input.toUpperCase();
    this.lettersInHand = lettersInHand;
  
    let letterFreq = {};
    for (let i=0; i < this.lettersInHand.length; i++) {
      let letter = this.lettersInHand[i]
      letterFreq[letter] = (letterFreq[letter] || 0) +1 ;
    };
    
    for (let i=0; i < this.input.length; i++) {
      let letter = this.input[i];
      if ((letter in letterFreq)&&(letterFreq[letter] > 0)) {
        letterFreq[letter] -= 1;
      } else {
        return false;
      }
    };
    return true;
  };
  
  scoreWord = (word) => {
    this.word = word.toUpperCase();
    let point = 0;
    
    for (let i=0; i < this.word.length; ++i){
      point += this.LETTER_SCORE[this.word[i]];
    }
    
    if(this.word.length >= 7){
      point += 8;
    }
    
    return point;
  };
  
  highestScoreFrom = (words) => {
  
      for (let word of words) {
        let point = this.scoreWord(word);
  
        if (point > this.highest.score){
          this.highest.word = word;
          this.highest.score = point;
        } else if (point === this.highest.score) {
          if(this.highest.word.length === 10){
            continue;
          } else if ((word.length === 10)||(this.highest.word.length > word.length)){
            this.highest.word = word;
            this.highest.score = point;
          };
        };
      };
  
    return this.highest
  };

;}

export default Adagrams;


