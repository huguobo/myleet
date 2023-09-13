/*
 * @lc app=leetcode.cn id=2596 lang=javascript
 *
 * [2596] 检查骑士巡视方案
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
	// 按照索引对应步数，记录坐标
	const rows = grid.length;
	const cols = grid[0].length;

	const stepArr = new Array(rows * cols).fill(null);
	for (let i = 0; i < rows; i ++) {
		for (let j = 0; j < cols; j ++) {
			stepArr[grid[i][j]] = [i, j];
		}
	}

	let step = 0;
	function validStep (cur, next) {
		return (Math.abs(next[0] - cur[0]) === 1 &&  Math.abs(next[1] - cur[1]) === 2) || (Math.abs(next[0] - cur[0]) === 2 &&  Math.abs(next[1] - cur[1]) === 1)
	}
	for (let i = 0; i < stepArr.length; i ++) {
		// 校验起点是否左上角
		if (i === 0 && (stepArr[i][0] !== 0 || stepArr[i][1] !== 0)) {
			break;
		}
		// 校验当前步数是否可达
		if (i > 0 && !validStep(stepArr[i-1], stepArr[i])) {
			break;
		}
		step ++;
	}

	return step === rows * cols;
};
// @lc code=end

