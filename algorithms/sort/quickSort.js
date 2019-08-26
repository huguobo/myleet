var quickSort = (arr) => {
  var mid;
  var left = [];
  var right = [];
  if (arr.length <= 1) {
    return arr;
  }
  mid = Math.floor(arr.length / 2);
  var benchmark = arr.splice(mid, 1)[0];
  arr.forEach((v)=>{
    if (v < benchmark) {
      left.push(v);
    } else {
      right.push(v);
    }
  });
  return quickSort(left).concat([benchmark], quickSort(right));
};

module.exports = quickSort;
