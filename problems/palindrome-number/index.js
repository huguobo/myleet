// 回文数 不用转换为字符串的方法
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var tmpX = x;
  var digit = 0;
  while (x) {
    digit = digit * 10 + (x % 10);
    x = parseInt(x / 10, 10);
  }
  return tmpX === digit;
};

module.exports = isPalindrome;
