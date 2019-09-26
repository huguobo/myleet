/* eslint-disable camelcase */
// 力扣273 整数转换为英文表示

// 示例 1:

// 输入: 123
// 输出: "One Hundred Twenty Three"
// 示例 2:

// 输入: 12345
// 输出: "Twelve Thousand Three Hundred Forty Five"
// 示例 3:

// 输入: 1234567
// 输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// 示例 4:

// 输入: 1234567891
// 输出: "One Billion Two Hundred Thirty Four Million
// Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = (num) => {
  if (!num) {
    return 'Zero';
  }
  const one_ten = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  const eleven_nineTeen = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const resArr = [];
  const transform = (number) => {
    if (number <= 10) {
      if (one_ten[number]) {
        resArr.push(one_ten[number]);
      }
    } else if (number < 20) {
      resArr.push(eleven_nineTeen[number % 10]);
    } else if (number < 100) {
      resArr.push(tens[parseInt((number / 10), 10)]);
      if (one_ten[number % 10]) resArr.push(one_ten[number % 10]);
    } else if (number < 1000) {
      resArr.push(one_ten[parseInt(number / 100, 10)]);
      resArr.push('Hundred');
      transform(number % 100);
    } else if (number < 1000000) {
      transform(parseInt(number / 1000, 10));
      resArr.push('Thousand');
      transform(number % 1000);
    } else if (number < 1000000000) {
      transform(parseInt(number / 1000000, 10));
      resArr.push('Million');
      transform(number % 1000000);
    } else {
      transform(parseInt(number / 1000000000, 10));
      resArr.push('Billion');
      transform(number % 1000000000);
    }
  };
  transform(num);
  return resArr.join(' ').trim();
};

module.exports = numberToWords;
