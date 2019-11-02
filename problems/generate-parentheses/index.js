/* eslint-disable no-shadow */
// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
// n = 3，生成结果为

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generate = (n)=>{
  let res = [];
  // 对于每个位置，至多有'('和')'这2种选择
  const backtrace = (n, acc = '', left = 1, right = 1, res)=>{
    if (acc.length === n) {
      res.push(acc);
      return;
    }
    // 左括号：只要不够一半，就能够添加
    if (left < n / 2) {
      backtrace(n, acc + '(', left + 1, right, res);
    }
    // 右括号：只要目前比左括号要少，就能添加
    if (right < left) {
      backtrace(n, acc + ')', left, right + 1, res);
    }
  };
  backtrace(n * 2, '', 0, 0, res);
  return res;
};
module.exports = generate;
