/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  const target = 0;
  if(nums.length < 3){
    return [];
  }
  nums.sort((a, b) => a - b);
  for(let i = 0 ; i < nums.length - 2; i ++){
    let j = i  + 1;
    let k = nums.length;
    if(i > 0 && nums[i - 1] === nums[i] ){
      continue;
    }
    while(j < k){
      const sum = nums[i] + nums[j] + nums[k];
      if(sum === target){
        res.push([nums[i], nums[j], nums[k]]);
        while(nums[j] === nums[j + 1]) j ++;
        while(nums[k -1] === nums[k]) k --;
        j ++;
        k --;
      } else if (sum < target){
        j ++;
      } else {
        k --;
      }
    }
  }
  return res;
};