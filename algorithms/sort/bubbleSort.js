
const bubbleSort = (arr) => {
  var i;
  var j;
  var len = arr.length;
  if (len <= 1) {
    return arr;
  }
  for (i = 0; i < len; i++) {
    for (j = 0; j < len - i - 1; j++) {
      var swap;
      if (arr[j] > arr[j + 1]) {
        swap = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
};

module.exports = bubbleSort;
