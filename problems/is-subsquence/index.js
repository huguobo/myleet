/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 判断s是否是t的子序列
const isSubquence = (s, t) => {
  const sArr = s.split('');
  const tArr = t.splict('');
  let i = 0;
  let j = 0;
  while(i < sArr.length && j < tArr.length) {
    if(sArr[i] === tArr[j]) {
      i ++;
    }
    j ++;
  }
  return i === sArr.length;
};