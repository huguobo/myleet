// 整数翻转 ，反转后的整数需要在[-2的31次方，2的31次方-1]

const reverse = function (x) {
  let digit = 0;
  const limit = Math.pow(2, 31);
  while (x) {
    digit = digit * 10 + (x % 10);
    x = parseInt(x / 10, 10);
  }
  if (digit < -limit || digit > limit - 1) {
    return 0;
  }
  return digit;
};

module.exports = reverse;
