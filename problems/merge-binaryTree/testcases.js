var TreeNode = require('../../data-structure/BinaryTreeNode/');
var dser = TreeNode.deserialize;
module.exports = [{
  input: [dser([1, [1, null, null], [2, null, null]]), dser([1, [2, null, null], [1, null, null]])],
  output: dser([2, [3, null, null], [3, null, null]])
}];
