/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(inorder.length ===0 && postorder.length ===0){
    return null;
  }
  const root = postorder.slice(-1)[0];
  const indexOfInorder = inorder.indexOf(root);
  const res = new TreeNode(root);

  // [左子树 根 右子树]
  const leftInorder = inorder.slice(0, indexOfInorder);
  
  const leftPostorder = postorder.slice(0, indexOfInorder);
  res.left = buildTree(leftInorder, leftPostorder);

  // [左子树 右子树 根]
  const rightInorder = inorder.slice(indexOfInorder + 1);
  const rightPostorder = postorder.slice(indexOfInorder, -1);
  res.right = buildTree(rightInorder, rightPostorder);

  return res;
};
