function getMaxNum(nums) {
  return nums.sort(function (a, b) {
    return `${b}${a}` - `${a}${b}`;
  }).join('');
}