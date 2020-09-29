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
  // 如果我们先left再right的话，我们的9是无法指向10的。因为我们的5.right是空，所以我们会通过findNext(5.next)去寻找非空节点，但是由于6的左右都为空，所以会继续findNext(6.next)，但是此时我们6和7还未链接，所以结果就是8 → 9 → null。
  // 但是如果我们先right再left的话，此时我们的6和7可以保证链接，那么此时findNext(6)找不到的话，我们会继续findNext(6.next)也就是findNext(7)。
  connect(root.right);
  connect(root.left);
  return root;
}

export default connect;