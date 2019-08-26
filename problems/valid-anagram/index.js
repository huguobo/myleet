/* eslint operator-assignment:0 */
// 242 有效的字母异位词
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var arrS = s.split('');
  var arrT = t.split('');
  var hash = {};
  arrS.forEach(v => {
    if (hash[v]) { hash[v] = hash[v] + 1; } else { hash[v] = 1; }
  });
  arrT.forEach(v => {
    if (hash[v]) { hash[v] = hash[v] - 1; } else { hash[v] = 1; }
  });
  return Object.values(hash).every(v=> v === 0);
};
module.exports = isAnagram;
