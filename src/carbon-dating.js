const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  if (typeof sampleActivity != "string") return false;
  try {
    if (typeof Number(sampleActivity)  != "number") return false;
    if (!Number(sampleActivity))return false;
  } catch (error) {
    return false;
  }

  const MODERN_ACTIVITY = 15;
  const PERIOD = 5730;

  const k = 0.693 / PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  if (result < 1 || !result) return false;
  return result;
}

module.exports = {
  dateSample
};
