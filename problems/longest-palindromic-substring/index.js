var longestPalindrome = function (s) {
  if (!s || !s.length) {
    return '';
  }
  var newString = '#' + s.split('').join('#') + '#';
  var res = '';
  for (let i = 1; i < newString.length; i++) {
    var j = 1;
    while (i - j >= 0 && i + j < newString.length && newString[i - j] === newString[i + j]) {
      j++;
    }
    if (j - 1 > res.length) {
      res = newString.substring(i - j + 1, i + j).replace(/#/g, '');
    }
  }
  return res;
};
module.exports = longestPalindrome;
