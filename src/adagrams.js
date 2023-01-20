export const drawLetters = () => {
let lettersDictionary = {
    "A": 9, 
    "B": 2, 
    "C": 2, 
    "D": 4, 
    "E": 12, 
    "F": 2, 
    "G": 3, 
    "H": 2, 
    "I": 9, 
    "J": 1, 
    "K": 1, 
    "L": 4, 
    "M": 2, 
    "N": 6, 
    "O": 8, 
    "P": 2, 
    "Q": 1, 
    "R": 6, 
    "S": 4, 
    "T": 6, 
    "U": 4, 
    "V": 2, 
    "W": 2, 
    "X": 1, 
    "Y": 2, 
    "Z": 1
    };
let count = 0;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lettersInHand = [];
while (count < 10){
  let letterChosen = characters.charAt(Math.floor(Math.random() * 26));
  if (lettersDictionary[letterChosen] > 0){
    lettersInHand.push(letterChosen);
    count += 1;
    lettersDictionary[letterChosen] -= 1;
  }
}
return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
//Code to create the dictionary of the letters in hand
  const dictOfLettersInHand = {}
  for (let i=0; i< lettersInHand.length ; i++){
    if (lettersInHand[i] in dictOfLettersInHand){

      let value = dictOfLettersInHand[lettersInHand[i]] ;
      dictOfLettersInHand[lettersInHand[i]] = value +1;
    }
    else {
      dictOfLettersInHand[lettersInHand[i]] = 1;
    }
  }
  //code to check occuerences and no. of occurences of characters 
  //in input in the dictionary 
  for (let i=0; i< input.length; i++){
  if(dictOfLettersInHand[input[i]] == null){
    return false;
  } else if (dictOfLettersInHand[input[i]]===0)
  {
    return false;
  }
  dictOfLettersInHand[input[i]] -= 1;
  }
  return true; 
};

export const scoreWord = (word) => {
  let lettersDictionary = {
    "A": 1, 
    "B": 3, 
    "C": 3, 
    "D": 2, 
    "E": 1, 
    "F": 4, 
    "G": 2, 
    "H": 4, 
    "I": 1, 
    "J": 8, 
    "K": 5, 
    "L": 1, 
    "M": 3, 
    "N": 1, 
    "O": 1, 
    "P": 3, 
    "Q": 10, 
    "R": 1, 
    "S": 1, 
    "T": 1, 
    "U": 1, 
    "V": 4, 
    "W": 4, 
    "X": 8, 
    "Y": 4, 
    "Z": 10
    };
    let pointsForWord = 0;
    let upperCaseWord = word.toUpperCase();
    if (word.length === 0)
    {
      return 0;
    }
//Code to add scores of the letters in the word
    for (let i =0; i< upperCaseWord.length; i++){
      if (upperCaseWord.charAt(i) in lettersDictionary){
        pointsForWord += lettersDictionary[upperCaseWord.charAt(i)];
      }
    }
// update the score based on its length
    if ((upperCaseWord.length >6) && (upperCaseWord.length <= 10)) {
      pointsForWord += 8;
    }
return pointsForWord
};

export const highestScoreFrom = (words) => {
  //Code to find the word with max score and 
  //maximum score of the word in the given list of words
  let wordScoreDict = {}
  let maxScore = 0
  let wordMaxScore = words[0]
  for (let curWord of words)
  {
    let scoreOfCurWord = scoreWord(curWord)
    wordScoreDict[curWord] = scoreOfCurWord
    if (scoreOfCurWord >= maxScore)
    {
      maxScore = scoreOfCurWord;
      wordMaxScore = curWord;
    }
  }
  //code to get the right word based on length of the word
  let resultWord = wordMaxScore
  let minWordLength = wordMaxScore.length
  for(const key in wordScoreDict){
    let curWordScore = wordScoreDict[key];
    if (curWordScore === maxScore)
    {
      if(key.length === 10){
        resultWord = key;
        break;
      }
      else if (key.length <= minWordLength){
        minWordLength = key.length;
        resultWord = key;
      }
    }
  }
  let finalResult = { word: resultWord, score: scoreWord(resultWord) };
  return finalResult;
  };
