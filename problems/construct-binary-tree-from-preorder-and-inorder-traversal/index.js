/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // 先序  根 左子树 右子树
  // 中序  左子树 根 右子树

  if(!preorder.length || ! inorder.length){
    return null;
  }
  //根
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  // 左子树 
  const leftInorder = inorder.slice(0, rootIndex);
  const leftPreOrder = preorder.slice(1, leftInorder.length + 1);
  root.left = buildTree(leftPreOrder, leftInorder);
  // 右子树
  const rightPreOrder = preorder.slice(rootIndex + 1);
  const rightInOrder = inorder.slice(rootIndex + 1);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
};
