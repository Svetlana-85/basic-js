const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  let count = 0;
  s2 = s2.split('');
  for(let i = 0; i < s1.length && s2.length > 0; i++){
    let position = s2.indexOf(s1[i]);
    if (position >= 0){
      s2.splice(position, 1);
      count ++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
