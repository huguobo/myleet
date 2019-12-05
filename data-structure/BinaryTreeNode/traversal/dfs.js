// 深度优先遍历，借用栈实现 （先序遍历）
var dfs = function (root, handler) {
  var stack = [];
  stack.push(root);
  while (stack.length) {
    var node = stack.pop();
    console.log(node.val);
    if (typeof handler === 'function') {
      handler(root);
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
};
module.exports = dfs;

// 中序遍历 (非递归)

var inorderTraversal = function (root) {
 var stack = [];
 var res = [];
 while(root || stack.length){
   if(root){
    stack.push(root);
    root = root.left;
   } else {
    root = stack.pop();
    res.push(root.val);
    root = root.right;
   }
 }
 return res;
}

// 后序遍历 （非递归）

var postOrderTraversal = function (root) {
  

}