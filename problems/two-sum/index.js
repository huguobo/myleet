/* eslint no-param-reassign:0 */

/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, find two numbers such that they add up to a
 * specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not
 * zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 两数相加
var twoSum = function (nums, target) {
  var hash = nums.reduce(function (prev, cur, index) {
    if (prev[cur] === undefined) {
      prev[cur] = index;
      return prev;
    }
    if (Array.isArray(prev[cur])) {
      prev[cur] = [...prev[cur], index];
      return prev;
    }
    prev[cur] = [prev[cur], index];
    return prev;
  }, {});
  var num;
  for (num in hash) {
    if (Array.isArray(hash[num]) && num * 2 === target) {
      return [hash[num][0] + 1, hash[num][1] + 1].sort(function (a, b) { return a - b; });
    }
    if (hash[target - num] !== undefined) {
      return [hash[num] + 1, hash[target - num] + 1].sort(function (a, b) { return a - b; });
    }
  }
};

module.exports = twoSum;
