// 10进制转二进制

const convert = num => {
  let res = [];
  if(!num) return '0';
  while(num) {
    const digit = num % 2;
    res.unshift(digit);
    num = Math.floor(num / 2);
  }
  return res.join('');
};

console.log(convert(9));

// 10进制转化为负二进制

const convert2 = num => {
  if(num === 0) return '0';
  const res = [];
  while(Math.abs(num)> 0) {
    const digit = Math.abs(num % -2);
    res.unshift(digit);
    num = Math.ceil( num / 2);
  }
  return res.join('');
}