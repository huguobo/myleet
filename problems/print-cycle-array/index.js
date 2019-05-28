/* eslint-disable no-shadow */
// 顺时针打印回型数组
var print = function (arr) {
  var rows = arr.length;
  var cols = arr[0].length;
  var start = 0;
  var res = [];
  function oneCircle(arr, start) {
    var endX = cols - start - 1;
    var endY = rows - start - 1;
    var i;
    // 打印上
    for (i = start; i <= endX; i++) {
      console.log(arr[start][i]);
      res.push(arr[start][i]);
    }
    // 打印右
    if (start < endY) {
      for (i = start + 1; i <= endY; i++) {
        console.log(arr[i][endX]);
        res.push(arr[i][endX]);
      }
    }
    // 打印下
    if (start < endX) {
      for (i = endX - 1; i >= start; i--) {
        console.log(arr[endY][i]);
        res.push(arr[endY][i]);
      }
    }
    // 打印左
    if (start < endY - 1) {
      for (i = endY - 1; i >= start + 1; i--) {
        console.log(arr[i][start]);
        res.push(arr[i][start]);
      }
    }
  }
  while (start * 2 < rows && start * 2 < cols) {
    oneCircle(arr, start);
    start++;
  }
  return res;
};
module.exports = print;


if (require.main === module) {
  const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  print(arr);
}
