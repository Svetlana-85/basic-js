const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let max = 0;
  const arrN = n.toString().split('');
  for(let i = 0; i < arrN.length; i++)
  {
	  currNumber = Array.from(arrN);
	  currNumber.splice(i,1);
	  currNumber = Number(currNumber.join(''));
	  if (currNumber > max) max = currNumber;
	}
	return Number(max);
}

module.exports = {
  deleteDigit
};
