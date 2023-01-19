"use strict";


export const drawLetters = () => {
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

export const usesAvailableLetters = (input, lettersInHand) => {
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

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
