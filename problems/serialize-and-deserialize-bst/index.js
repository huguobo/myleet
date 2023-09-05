/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 */

// @lc code=start
var serialize = function(root) {
	let arr = [];
	function preTravel(root) {
		if (!root) return;
		arr.push(root.val);
		preTravel(root.left);
		preTravel(root.right);
	}
	preTravel(root);
	const str = arr.join(',');
	return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(str) {

	if (!str || !str.length) return null;
	const stack = str.split(',').map(item => parseInt(item));

	function generator1(stack, min, max) {
		if (!stack.length || stack[0] < min || stack[0] > max) return null;
		const val = stack.shift();
		const root = new TreeNode(val);
		root.left = generator1(stack, min, val);
		root.right = generator1(stack, val, max);
		return root;
	}

	return generator1(stack, -Infinity, Infinity);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

