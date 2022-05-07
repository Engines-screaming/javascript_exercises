/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    // const uniqueWords = this.words;
    const initVal = {};
    this.wordMap = this.words.reduce(function(prevVal, currVal) {
      // if there isnt a next index, return
      let nextIndex = this.words.indexOf(currVal) + 1;

      if (nextIndex < this.words.length) {
        markovWords.push(this.words[nextIndex]);
      } else {
        return prevVal;
      }

      // if currVal is a key, add to existing value
      // else, create the key and add new value
      if (preVal.hasOwnProperty(currVal)) {
        prevVal[currVal].push(this.words[nextIndex]);
      } else {
        const markovWords = [];
        markovWords.push(this.words[nextIndex]);
        preVal[currVal] = markovWords;
      } 
    }, initVal);
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}


module.exports = { MarkovMachine };