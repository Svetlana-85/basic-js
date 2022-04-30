const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrValue: [],
  
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.arrValue.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    this.arrValue.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if (!position || typeof position != "number" || !Number.isInteger(position) || position < 0 
    || position > this.getLength()) {
      this.arrValue.length = 0;
      this.arrValue = [];
      throw new Error ("You can't remove incorrect link!");
    }
    this.arrValue.splice(position-1, 1);
    return this;

  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.arrValue.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let resultChain = this.arrValue.join('~~');
    this.arrValue.length = 0;
    this.arrValue = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
