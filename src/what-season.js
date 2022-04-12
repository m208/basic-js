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
  if (!date) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!');

  // works too:
  // try {
  //   date.getTimezoneOffset()
  // } catch (error) {
  //   throw new Error('Invalid date!');
  // }

  const month = date.getMonth();
  let season;
  if (month > 1 && month < 5) season = 'spring';
  else if (month >= 5 && month < 8) season = 'summer';
  else if (month >= 8 && month < 11) season = 'autumn';
  else season = 'winter';

  return season;
}

module.exports = {
  getSeason
};
