// 最长回文串
/* eslint no-undef:0 */
var longestPalindrome = function (s) {
  var set = new Set();
  var res = 0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (set.has(element)) {
      res += 2;
      set.delete(element);
    } else {
      set.add(element);
    }
  }
  return set.size ? res + 1 : res;
};
module.exports = longestPalindrome;
