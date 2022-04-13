const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(val = ' ') {
    this.chain.push(val);
    return this;
  },
  removeLink(pos) {
    const index = pos - 1;
    if (Number.isInteger(index) && index >= 0 && this.chain.length > index) {
      this.chain.splice(index, 1);
      return this;
    }
    this.chain.length = 0;
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.map(i => `( ${i} )`).join('~~');
    this.chain.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};
