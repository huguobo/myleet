var TreeNode = require('../../data-structure/BinaryTreeNode/');
var dser = TreeNode.deserialize;
module.exports = [{
  input: [dser([1, [2, [3, null, null], null], [2, null, [3, null, null]]])],
  output: true
}];
