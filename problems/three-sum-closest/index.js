/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];
  for(let i = 0; i < nums.length - 2; i ++){
      let j = i + 1;
      let k = nums.length -1;
      while(j < k){
          const sum = nums[i] + nums[j] + nums[k];
          if( Math.abs(target - sum) <= Math.abs(target - res)){
              res = sum;
          } 
          if (target > sum) {
              j ++;
          } else{
              k --;
          }
      }
  }
  return res;
};