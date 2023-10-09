/*
 * @lc app=leetcode.cn id=2578 lang=javascript
 *
 * [2578] 最小和分割
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
	const numArr = num.toString().split('').sort();
	const len = numArr.length;
  
	let leftNum = '';
	let rightNum = '';

	numArr.forEach((v, i) => {
		if (i % 2 === 0) {
			leftNum += v;
		} else {
			rightNum += v;
		}
	});

	return Number(leftNum) + Number(rightNum);
};
// @lc code=end

