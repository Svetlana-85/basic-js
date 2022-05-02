const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let dnsCount = {};
  for (let i = 0; i < domains.length; i++){
    let keyDns = "."+domains[i].split(".").reverse().join(".");
    dnsCount[keyDns] = 1;
    domains[i] = domains[i].split(".");
    while(domains[i].length > 1){
      domains[i].shift();
      console.log(domains[i]);
      keyDns = domains[i].slice();
      keyDns = "." + keyDns.reverse().join(".");
      if(keyDns in dnsCount) dnsCount[keyDns] += 1;
      else dnsCount[keyDns] = 1;
    }
  }
  return dnsCount;
}

module.exports = {
  getDNSStats
};
