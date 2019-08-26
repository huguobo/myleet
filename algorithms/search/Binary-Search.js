/**
 * 二分查找
 * @param {Array} arr 有序数组
 * @param {Number} val 查找的值
 * @param {Number} begin 起始索引
 * @param {Number} end 结束索引
 */

var binarySearch = (arr, val, begin, end) => {
  var mid = Math.floor((begin + end) / 2);
  if (val === arr[mid]) {
    return mid;
  } if (val > arr[mid]) {
    return binarySearch(arr, val, mid + 1, end);
  }
  return binarySearch(arr, val, begin, mid - 1);
};

module.exports = binarySearch;
