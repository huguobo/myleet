var pathsum = function (root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  if (!root.left && !root.right && !sum) {
    return true;
  }
  return pathsum(root.left, sum) || pathsum(root.right, sum);
};
module.exports = pathsum;
