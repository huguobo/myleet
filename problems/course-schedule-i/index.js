/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
	// 用一个数组记录课程i的入度
	const inDgree = new Array(numCourses).fill(0);

	// 邻接表用来记录定点可以到达的地方
	const map = {};
	for(let i=0; i<prerequisites.length; i++ )  {
		// 更新入度
		inDgree[prerequisites[i][0]]++
		// 更新邻接表
		if (map[prerequisites[i][1]]) { 
			map[prerequisites[i][1]].push(prerequisites[i][0]);
		} else {
			map[prerequisites[i][1]] = [prerequisites[i][0]];
		}
	}

	// bfs
	const res = [];
	const queue = [];

	// 所有入度为 0 的课入队；
	for(let i = 0; i < inDgree.length; i++) {
		if (inDgree[i] === 0) {
			queue.push(i);
		}
	}
	while(queue.length) {
		let cur = queue.shift();
		res.push(cur);
		// 给所有依赖当前课程的入度减一
		const nextCourses = map[cur];
		if(nextCourses && nextCourses.length) {
			for(let i = 0; i < nextCourses.length; i++) {
				inDgree[nextCourses[i]] --;
				// 如果减少为0，推入队列
				if (inDgree[nextCourses[i]] === 0) {
					queue.push(nextCourses[i]);
				}
			}
		}
	}

	return res.length === numCourses;

};
// @lc code=end

