var TreeNode = require('../../data-structure/BinaryTreeNode');
var desr = TreeNode.deserialize;
module.exports = [
  {
    input: [desr([1, [2, null, null], [3, null, null]])],
    output: 2
  },
  {
    input: [desr([1, [3, null, null], [4, [5, null, null], [6, null, null]]])],
    output: 8
  }
];
