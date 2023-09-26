/*
 * @lc app=leetcode.cn id=2582 lang=javascript
 *
 * [2582] 递枕头
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
	// n = 4  time = 5  循环长度 4 -1 = 3   商1余2   1, 2,3,4, 3,2,1, 2,3,4 1,2,3 
	// 每次循环的长度实际上是 n - 1
	const iterationLen = n - 1;
	const divison = Math.floor(time / iterationLen);
	const remainder = time % iterationLen;

	if(divison % 2 ===0) {
		return remainder + 1
	} else {
		return n - remainder;
	}
};
// @lc code=end

