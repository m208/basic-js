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
function deleteDigit(num) {
  let max = 0, iToDel = 0;
  const numString = '' + num;

  for (let i = 0; i < numString.length; i++) {
    const array = ('' + numString).split('');
    array.splice(i, 1);

    const sum = +array.reduce((prev, curr) => prev + curr, 0);
    if (sum > max) [max, iToDel] = [sum, i];
  }

  const array = (numString).split('');
  array.splice(iToDel, 1);

  return +array.join('');
}

module.exports = {
  deleteDigit
};
