/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n === 3 || n === 2) {
      return n - 1
    }
    if(n % 3 === 2) {
      return Math.pow(3, Math.floor(n / 3)) * 2
    } else if (n % 3 === 1) {
      return Math.pow(3, Math.floor(n / 3) - 1) * 4
    }
    return Math.pow(3, n / 3) 
};
