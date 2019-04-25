var treeHeight = function (root) {
  console.log(root);
  if (!root) {
    return 0;
  }
  return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1;
};
module.exports = treeHeight;
