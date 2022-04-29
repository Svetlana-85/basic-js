const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  /*try {
    if (!date) return "Unable to determine the time of year!";
    if (date instanceof Date){
      if (Object.prototype.toString.call(date) != '[Object Date]') throw new Error ("Invalid date!");
  
     // if (!date.getTime()) return "Invalid date!";
      let month = date.getMonth();
      if (month === 11 || month === 0 || month === 1) return "winter";
      else if (month > 1 && month <=4) return "spring";
      else if (month > 4 && month <=7) return "summer";
      else if (month > 7 && month <=10) return "autumn";
  } catch (error) {
    return "Invalid date!";
  }*/
  //if (date === "no-value") return "Unable to determine the time of year!";
  if (!date) return "Unable to determine the time of year!";
  if (date instanceof Date){
	console.log(Object.prototype.toString.call(date));
    if (Object.prototype.toString.call(date) !== '[object Date]') return "Invalid date!";
  try {
    let month = date.getMonth();
    if (month === 11 || month === 0 || month === 1) return "winter";
    else if (month > 1 && month <=4) return "spring";
    else if (month > 4 && month <=7) return "summer";
    else if (month > 7 && month <=10) return "autumn";
}
  catch {
	return "Invalid date!";
  }
  }
  return "Invalid date!";
}

module.exports = {
  getSeason
};
