const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrName) {
  //throw new NotImplementedError('Not implemented');
  if(!arrName) return false;
  let nameDreamTeam = '';
  for(let i = 0; i < arrName.length; i++){
    if (typeof arrName[i] === 'string' && arrName[i]) {
      let str = arrName[i].replace(/\s+/g, '');
      console.log(str[0]);
      nameDreamTeam += str[0].toUpperCase();
    }
  }
  if (!nameDreamTeam) return false;
  return nameDreamTeam.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
