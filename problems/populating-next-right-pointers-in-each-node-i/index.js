/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

 // 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
  // II 是不完美二叉树
 const connect = root => {
   if(!root) return null;
   if(root.left) {
       root.left.next = root.right;
   }
   if(root.right && root.next) {
     root.right.next = root.next.left;
   }
   connect(root.left);
   connect(root.right);
   return root;
 }