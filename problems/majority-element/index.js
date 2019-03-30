// 169 求众树
var majorityElement = function (nums) {
  var res;
  var count = 0;
  for (let item of nums) {
    if (count === 0) {
      res = item;
      count++;
    } else if (res !== item) {
      count--;
    } else {
      count++;
    }
  }
  return res;
};
module.exports = majorityElement;
