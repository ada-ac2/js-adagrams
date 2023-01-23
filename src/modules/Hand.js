import { Alphabet } from "./Alphabet";

export class Hand extends Alphabet {
  constructor(num) {
    super();
    this.hand = this.drawLettersInAlphabet(num);
  }
  drawLettersInAlphabet(num) {
    for (let i = 0; i < num; ++i) {
      const letters = Object.keys(this.letterCounts);
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      this.hand.push(randomLetter);
      this.letterCounts.decreaseLetterCount(randomLetter);
    }
  }
}
