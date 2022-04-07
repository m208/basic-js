const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];

  for (let s of str) {
    if (res[res.length - 1] === s) {
      res[res.length - 2] = res[res.length - 2] + 1;
    } else {
      res.push(1);
      res.push(s);
    }
  }

  return res.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
