const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const h = matrix.length;
  const w = matrix[0].length;

  const result = JSON.parse(JSON.stringify(matrix)); //deep clone

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {

      //console.log('cell y: ' + y + ' x: ' + x);

      let bombsCount = 0;
      for (let ys = y - 1; ys <= y + 1; ys++) {
        for (let xs = x - 1; xs <= x + 1; xs++) {

          if ((xs >= 0 && xs < w) && (ys >= 0 && ys < h)) {
            if (xs == x && ys == y) { }  //center cell, skip it
            else {
              bombsCount += matrix[ys][xs];
              //console.log('ys: ' + ys, 'xs: ' + xs, 'val: ' + matrix[ys][xs], 'bombsCount: ', bombsCount);
            }
            result[y][x] = bombsCount;
          }

        }

      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
