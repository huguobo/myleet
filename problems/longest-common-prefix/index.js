// 最长公共前缀
var longestCommonPrefix = function (strs) {
  var res = '';
  if (!strs.length) return res;
  for (var j = 0; j < strs[0].length; j++) { // 第j位
    for (var i = 1; i < strs.length; i++) { // 第i个
      if (strs[i][j] !== strs[0][j]) return res;
    }
    res += strs[0][j];
  }
  return res;
};
module.exports = longestCommonPrefix;
