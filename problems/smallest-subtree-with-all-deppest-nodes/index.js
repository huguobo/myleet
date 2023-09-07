/*
 * @lc app=leetcode.cn id=865 lang=javascript
 *
 * [865] 具有所有最深节点的最小子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
	function getTreeHeight(root) {
		if (!root) return 0;
		const leftHeight = getTreeHeight(root.left);
		const rightHeight = getTreeHeight(root.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}

	const leftHeight = getTreeHeight(root.left);
	const rightHeight = getTreeHeight(root.right);
	// 如果左右字数深度相同，那么当前就是具有最深节点的最小字数（左右都有最深节点）
	if (leftHeight === rightHeight) return root;

	// 左边深去左边找，右边深去右边找
	return leftHeight > rightHeight ? subtreeWithAllDeepest(root.left) : subtreeWithAllDeepest(root.right);
};
// @lc code=end
