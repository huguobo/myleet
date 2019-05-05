function add(a, b) {
  var arrA = a.toString().split('').reverse();
  var arrB = b.toString().split('').reverse();
  var sum = 0;
  var left = 0;
  var overFlow = 0;
  var arrSum = [];

  var maxLen = Math.max(arrA.length, arrB.length);
  var i;
  for (i = 0; i < maxLen; i++) {
    sum = overFlow;
    if (i < arrA.length) {
      sum += Number(arrA[i]);
    }
    if (i < arrB.length) {
      sum += Number(arrB[i]);
    }
    left = sum % 10;
    arrSum[i] = left;
    overFlow = Math.floor(sum / 10);
  }
  if (overFlow !== 0) {
    arrSum[i + 1] = overFlow;
  }
  return arrSum.reverse().join('');
}
module.exports = add;
