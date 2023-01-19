let letterPool = new Map() 
letterPool.set("A", 9);
letterPool.set("B", 2);
letterPool.set("C", 2);
letterPool.set("D", 4);
letterPool.set("E", 12);
letterPool.set("F", 2);
letterPool.set("G", 3);
letterPool.set("H", 2);
letterPool.set("I", 9);
letterPool.set("J", 1);
letterPool.set("K", 1);
letterPool.set("L", 4);
letterPool.set("M", 2);
letterPool.set("N", 6);
letterPool.set("O", 8);
letterPool.set("P", 2);
letterPool.set("Q", 1);
letterPool.set("R", 6);
letterPool.set("S", 4);
letterPool.set("T", 6);
letterPool.set("U", 4);
letterPool.set("V", 2);
letterPool.set("W", 2);
letterPool.set("X", 1);
letterPool.set("Y", 2);
letterPool.set("Z", 1);


export const drawLetters = () => {
  const letterPoolCopy = new Map(JSON.parse(JSON.stringify(Array.from(letterPool))));
  const keys = Array.from(letterPoolCopy.keys()) 
  let lettersDraw = [];
  let count = 10;  

  while(count > 0){
    //Find the random index 
    let index = Math.floor(Math.random() * keys.length); 
    let indexCounter = 0; 

    for (let key of letterPoolCopy.keys()) {
      if (indexCounter === index) {
        // If the letter already exceed it's avaliable draws, continue to do the next random draw 
        if(letterPoolCopy.get(key) > 0){
          count--; 
          lettersDraw.push(key); 
          letterPoolCopy.set(key, letterPoolCopy.get(key)-1);
        }
        break;   
      }
      indexCounter++;
    }
  }
  return lettersDraw;
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Create a copy of the lettersInHand
  let lettersInHandCopy = JSON.parse(JSON.stringify(lettersInHand));
  for(const letter of input){
    // Check if lettersInHand includes the letter 
    if(lettersInHandCopy.includes(letter)){
      // Find the index of the letter that needs to be removed 
      const removeIndex = lettersInHandCopy.indexOf(letter);
      // Remove the letter from lettersInHand 
      lettersInHandCopy.splice(removeIndex, 1);
    }else{ // If the letter in the input is not in lettersInHand, return false 
      return false;
    }
  } 
  return true; 
}

export const scoreWord = (word) => {
  let score = 0 
  word = word.toUpperCase() 

  if(word.length >= 7 && word.length <= 10){
    score += 8 
  }

  for(const ch of word){
    if(["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].includes(ch)){
      score += 1
    }else if(["D", "G"].includes(ch)){
      score += 2
    }else if(["B", "C", "M", "P"].includes(ch)){
      score += 3
    }else if(["F", "H", "V", "W", "Y"].includes(ch)){
      score += 4
    }else if(ch === "K"){
      score += 5 
    }else if(["J", "X"].includes(ch)){
      score += 8
    }else{
      score += 10 
    }
  }
  return score 
}

