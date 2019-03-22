// 回文子串，个数
var countSubstrings = function (s) {
  var newString = '#' + s.split('').join('#') + '#';
  var res = s.length;
  for (var i = 0; i < newString.length; i++) {
    var j = 1;
    while (i - j >= 0 && i + j < newString.length) {
      if (newString[i - j] === newString[i + j]) {
        if (newString[i - j] !== '#') {
          res++;
        }
        j++;
      } else {
        break;
      }
    }
  }
  return res;
};
module.exports = countSubstrings;
