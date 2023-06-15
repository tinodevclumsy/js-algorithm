/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }

  var arr = [];

  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === ")") {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      } else {
        return false;
      }
    } else if (s.charAt(i) === "]") {
      if (arr[arr.length - 1] === "[") {
        arr.pop();
      } else {
        return false;
      }
    } else if (s.charAt(i) === "}") {
      if (arr[arr.length - 1] === "{") {
        arr.pop();
      } else {
        return false;
      }
    } else {
      arr.push(s.charAt(i));
    }
  }

  return arr.length === 0;
};
