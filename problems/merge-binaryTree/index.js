// 合并二叉树
var TreeNode = require('../../data-structure/BinaryTreeNode/');
var mergeBinaryTree = function (t1, t2) {
  if (!t1 && !t2) {
    return null;
  }
  var tmp1 = t1 || {};
  var tmp2 = t2 || {};
  var root = new TreeNode((tmp1.val || 0) + (tmp2.val || 0));
  if (tmp1.left || tmp2.left) {
    root.left = mergeBinaryTree(tmp1.left, tmp2.left);
  }
  if (tmp1.right || tmp2.right) {
    root.right = mergeBinaryTree(tmp1.right, tmp2.right);
  }
  return root;
};

module.exports = mergeBinaryTree;
