const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  if (!options.repeatTimes ) 
    options.repeatTimes = 1;

  let strResult = '';
  let strAddition = '';

  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  
  if (options.additionRepeatTimes){
    for(let i = 0; i < options.additionRepeatTimes; i++){
      if (i == options.additionRepeatTimes - 1)
        strAddition += options.addition;
      else strAddition += options.addition + options.additionSeparator;
    }
  }
  else if (options.addition) strAddition = options.addition;

  for(let i = 0; i < options.repeatTimes; i++){
    if (i == options.repeatTimes-1)
      strResult += str + strAddition;
    else strResult += str + strAddition + options.separator;
  }
  return strResult;
}

module.exports = {
  repeater
};
