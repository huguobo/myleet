/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// https://leetcode-cn.com/problems/search-insert-position/submissions/
var searchInsert = function (nums, target) {
  var i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) {
      break;
    }
    i++;
  }
  return i;
};
module.exports = searchInsert;
