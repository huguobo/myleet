/* eslint-disable no-unused-expressions */
//  中序遍历树
var inorderTraversal = function (root, res = []) {
  if (!root) {
    return res;
  }
  root.left && inorderTraversal(root.left, res);
  res.push(root.val);
  root.right && inorderTraversal(root.right, res);
  return res;
};

module.exports = inorderTraversal;
