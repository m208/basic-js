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
  const oS1 = {}, oS2 = {};

  for (let s of s1) {
    oS1[s] = oS1[s] + 1 || 1;
  }
  for (let s of s2) {
    oS2[s] = oS2[s] + 1 || 1;
  }

  let count = 0;
  for (let i of Object.keys(oS1)) {
    if (Object.keys(oS2).includes(i)) {
      count += Math.min(oS1[i], oS2[i]);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
