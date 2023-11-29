
// leetcode 697 数组的度
// 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

// 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
var findShortestSubArray = function(nums) {
  let hash = {};
  for(let i = 0; i < nums.length; i++) {
    if(hash[nums[i]]) {
      hash[nums[i]].count++
      hash[nums[i]].last = i
    } else {
      hash[nums[i]] = {};
      hash[nums[i]].count = 1;
      hash[nums[i]].first = i; 
      hash[nums[i]].last = i;
    }
  }
  // find the degree
  let mostCountVal = nums[0];
  for(let num in hash) {
    if(hash[num].count === hash[mostCountVal].count) {
      if(hash[num].last - hash[num].first < hash[mostCountVal].last - hash[mostCountVal].first) {
        mostCountVal = num;
      }
    } else if (hash[num].count > hash[mostCountVal].count) {
      mostCountVal =  num;
    }
  }
  return hash[mostCountVal].last - hash[mostCountVal].first + 1;
}