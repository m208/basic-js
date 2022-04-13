const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {

  if (!Array.isArray(array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const discard_next = (input, output, i) => {
    input.splice(i, 1);
  };
  const discard_prev = (input, output, i) => {
    output.pop();
  };
  const double_next = (input, output, i) => {
    if (input.length > i) input.splice(i, 0, input[i]);
  };
  const double_prev = (input, output, i) => {
    const prev = output.pop();
    if (prev) output.push(prev, prev);
  };

  const controlSeqs = {
    '--discard-next': discard_next,
    '--discard-prev': discard_prev,
    '--double-next': double_next,
    '--double-prev': double_prev,
  };

  const input = Array.from(array);
  const output = [];

  let i = 0;
  for (const item of input) {
    if (!Object.keys(controlSeqs).includes(item)) output.push(item);
    else {
      if (!Object.keys(controlSeqs).includes(input[i - 1]))     //'--discard-next', x, '--double-prev'
        controlSeqs[item](input, output, i + 1);
    }
    i++;
  }

  return output;
}

module.exports = {
  transform
};
