/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

const connect = root => {
  function findNext(root) {
    if(!root) return null;
    if(root.left) return root.left;
    if(root.right) return root.right;
    return findNext(root.next);
  }
  if(!root) return null;
  if(root.left) {
    if(root.right) {
      root.left.next = root.right
    } else {
      root.left.next = findNext(root.next);
    }
  }
  if(root.right) {
    root.right.next = findNext(root.next);
  }
  // 先 right
  connect(root.right);
  connect(root.left);
  return root;
}

export default connect;