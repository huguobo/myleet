/* eslint-disable no-unused-expressions */
//  中序遍历树

// 迭代 Iteration
var inorderTraversal = function (root) {
  var stack = [];
  var res = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};

// 递归 Recursion
// var inorderTraversal = function (root, res = []) {
//   if (!root) {
//     return res;
//   }
//   root.left && inorderTraversal(root.left, res);
//   res.push(root.val);
//   root.right && inorderTraversal(root.right, res);
//   return res;
// };

module.exports = inorderTraversal;
