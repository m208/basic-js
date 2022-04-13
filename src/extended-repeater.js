const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (Object.keys(options).includes('addition'))
    options.addition = '' + options.addition;

  let string = partRepeater(
    options.addition,
    options.additionRepeatTimes,
    options.additionSeparator || '|');

  string = partRepeater(
    str + string,
    options.repeatTimes,
    options.separator || '+');

  return string;
}

function partRepeater(str, count, separator) {
  if (str && count)
    return Array(count).fill(str).join(separator);
  else if (str && !count) return str;
  else return '';
}

module.exports = {
  repeater
};
