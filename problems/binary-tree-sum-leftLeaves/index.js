var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  if (root.left && root.left.left === null && root.left.right === null) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
module.exports = sumOfLeftLeaves;
