const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.Reverse = !direct;
  }
  
  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (message === undefined || key === undefined) throw new Error (`Incorrect arguments!`);
    let language = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    key = key.toUpperCase();
    message = message.toUpperCase();
    let result = '';
    let posLetterMessage, posLetterKey, posLetterEncript;
    let lenKey = key.length;
    for(let i = 0, j = 0; i < message.length; i++, j++){
      if (j === lenKey) j = 0;
      posLetterMessage = language.indexOf(message[i]);
      if (posLetterMessage >= 0){
        posLetterKey = language.indexOf(key[j]);
        posLetterEncript = (posLetterMessage + posLetterKey)%26;
        result += language[posLetterEncript];
      }
      else {
        result += message[i];
        j--;
      }
    }
    if (!this.Reverse)
      return result;
    else return result.split('').reverse().join('') ;
  }
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (message === undefined || key === undefined) throw new Error (`Incorrect arguments!`);
    let language = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    key = key.toUpperCase();
    message = message.toUpperCase();
    //if (this.Reverse) message = message.split('').reverse().join('') ;
    let result = '';
    let posLetterMessage, posLetterKey, posLetterEncript;
    let lenKey = key.length;
    for(let i = 0, j = 0; i < message.length; i++, j++){
      if (j === lenKey) j = 0;
      posLetterMessage = language.indexOf(message[i]);
      if (posLetterMessage >= 0){
        posLetterKey = language.indexOf(key[j]);
        posLetterEncript = (posLetterMessage - posLetterKey + 26)%26;
        result += language[posLetterEncript];
      }
      else {
        result += message[i];
        j--;
      }
    }
    if (!this.Reverse)
      return result;
    else return result.split('').reverse().join('') ;
    //return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
