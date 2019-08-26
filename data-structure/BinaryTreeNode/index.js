function BinaryTreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.serialize = function (root) {
  return JSON.stringify(ser(root));

  function ser(r) {
    if (r === null) return null;
    return [r.val, ser(r.left), ser(r.right)];
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
BinaryTreeNode.deserialize = function (data) {
  if (typeof data === 'string') { return deser(JSON.parse(data)); }
  return deser(data);
  function deser(d) {
    if (d === null) return null;
    var root = new BinaryTreeNode(d[0]);
    root.left = deser(d[1]);
    root.right = deser(d[2]);
    return root;
  }
};

module.exports = BinaryTreeNode;
