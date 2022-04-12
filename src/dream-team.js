const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const letters = members.filter(i => typeof i == 'string')
    .map(i => i.trim()[0])
    .filter(i => isNaN(i))
    .map(i => i.toUpperCase())
    .sort()
    .join('');

  return letters;
}

module.exports = {
  createDreamTeam
};
