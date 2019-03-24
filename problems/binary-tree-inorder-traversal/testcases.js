var TreeNode = require('../../data-structure/BinaryTreeNode');
var desr = TreeNode.deserialize;

module.exports = [{
  input: [desr([1, [2, null, null], [3, null, null]])],
  output: [2, 1, 3]
}];
