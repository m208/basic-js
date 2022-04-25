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
  const count = {};

  for (let d of domains) {
    const domains = d.split('.').reverse();
    const domain = [];
    let last = '';

    for (let i = 0; i < domains.length; i++) {
      last = last + '.' + domains[i];
      domain.push(last);
    }

    for (let d of domain) {
      count[d] = count[d] ? count[d] + 1 : 1;
    }

  }

  return count

}

module.exports = {
  getDNSStats
};
