const { matchChain } = require("xregexp");

const isBalanced = root => {
  function treeDeepth (root) {
    if(!root) return 0;
    const left = treeDeepth(root.left);
    if(left === -1) return -1;
    const right = treeDeepth(root.right);
    if(right === -1) return -1;
    return Math.abs(left -  right) >1 ? -1: Math.max(left, right) + 1;
  }
  return treeDeepth(root) !== -1;
} 

// 易于理解的重复遍历版本
const isBalanced = root => {
  function treeDeepth(root) {
    if(!root) return 0;
    return Math.max(treeDeepth(root.left), treeDeepth(root.right)) + 1;
  }
  if(!root) return true;
  const leftDeepth = treeDeepth(root.left);
  const rightDeepth = treeDeepth(root.right);
  return  Math.abs(leftDeepth - rightDeepth) <=1 && isBalanced(root.left) && isBalanced(root.right);
}