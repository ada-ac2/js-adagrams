"use strict";

export default class Adagrams{

  drawLetters = () => {
    const letterPool = {
      A: 9, B: 2, C: 2, D: 4, 
      E: 12, F: 2, G: 3, H: 2, 
      I: 9, J: 1, K: 1, L: 4, 
      M: 2, N: 6, O: 8, P: 2, 
      Q: 1, R: 6, S: 4, T: 6, 
      U: 4, V: 2, W: 2, X: 1, 
      Y: 2, Z: 1
    }; 
      //creates a bag of letters
      let bagOfLetters = [];
      for (let letter in letterPool) {
        for (let i = 0; i < letterPool[letter]; ++i) {
          bagOfLetters.push(letter);
        }
      }
      const drawnLetters = [];
      
    
      // adds ten random letters to hand 
      for (let i = 0; i < 10; ++i) {
        let randomIndex = Math.floor((Math.random() * bagOfLetters.length));
        let randomLetter = bagOfLetters[randomIndex]; 
        drawnLetters.push(randomLetter); //adds letter to hand
        bagOfLetters.splice(randomIndex, 1); //removes letter from bag
      }
      return drawnLetters;
  };

  usesAvailableLetters = (input, lettersInHand) => {
    // dictionary with letters in hand as keys and their frequencies as values
    const letterFreqMap = {}; 

    // anonymous function that is called in the forEach method below
    // purpose: populates letterFreqMap
    const createMap = function(letter){
      if (letter in letterFreqMap) {
        letterFreqMap[letter]++;
      }
      else {
        letterFreqMap[letter] = 1;
      }
    }

    lettersInHand.forEach(createMap);

    // loops through every letter in input
    // checks if letter is in hand
    // if letter is there BUT there are no available letters left, return false
    // if letter is there BUT there are available letters left, decrement the frequency of the letter by 1
    // if letter is not there, return false
    for (let i = 0; i < input.length; ++i) {
        if (lettersInHand.includes(input[i])){
          if (letterFreqMap[input[i]] === 0) {
            return false;
          }
          else {
            letterFreqMap[input[i]]--;
          }
        }
        else {
            return false;
        }
    }
    return true;
          
  };

  scoreWord = (word) => {
    const scoreChart = {
      A: 1, B: 3, C: 3, D: 2, 
      E: 1, F: 4, G: 2, H: 4, 
      I: 1, J: 8, K: 5, L: 1, 
      M: 3, N: 1, O: 1, P: 3, 
      Q: 10, R: 1, S: 1, T: 1, 
      U: 1, V: 4, W: 4, X: 8, 
      Y: 4, Z: 10
  };

    let score = 0;
    if (word.length > 0) {
      for (let letter in word){
          score += scoreChart[word[letter].toUpperCase()];
      }
      if (word.length >=7){
        score += 8;
      }
    }
    return score;
  };

  highestScoreFrom = (words) => {
    let highestWordAndScore = ["", 0];
    let score = 0;
    for (let i in words) {
      score = this.scoreWord(words[i]);
      if (score > highestWordAndScore[1]) {
        highestWordAndScore = [words[i], score];
      }
      // check if scores are tied
      else if (score === highestWordAndScore[1]) {
        // check if the lengths of both words are the same
        // if they are, do nothing
        if (words[i].length != highestWordAndScore[0].length) {
        // if they arent, check if word is 10 letters long
          if (words[i].length === 10) {
            highestWordAndScore = [words[i], score];
          }
        // if not, check if word with highest score is not 10 letters long
          else if (highestWordAndScore[0].length != 10) {
            // if not, check which word has fewer letters
            if (words[i].length < highestWordAndScore[0].length) {
                highestWordAndScore = [words[i], score];
            }
          }
        }
      }
      
    }
                                
      return {"score":highestWordAndScore[1], "word":highestWordAndScore[0]};
  };
};


