
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (!matrix || !matrix.length) 
    ? []
    : [].concat(...matrix.reduce((a, b, c) => {
      if (c % 2 !== 0) { b.reverse(); }
      return matrix
    }, []));
}
