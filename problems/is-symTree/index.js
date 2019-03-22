var isSymTree = function (root) {
  if (!root) {
    return true;
  }
  function isSame(left, right) {
    if (left === null && right === null) {
      return true;
    } if (left !== null && right !== null && right.val === left.val) {
      return isSame(left.left, right.right) && isSame(left.right, right.left);
    }
    return false;
  }
  return isSame(root.left, root.right);
};
module.exports = isSymTree;
