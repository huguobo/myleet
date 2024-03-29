// 深度优先遍历，借用栈实现 （先序遍历）
var dfs = function (root, handler) {
  var stack = [];
  stack.push(root);
  while (stack.length) {
    var node = stack.pop();
    console.log(node.val);
    if (typeof handler === 'function') {
      handler(node);
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

var postorderTraversal = function(root) {
  if(!root){
    return [];
  }
  const stack = [];
  stack.push(root);
  let tmp = null;
  let res = [];
  while(stack.length !== 0) {
    tmp = stack.slice(-1)[0];
    if(tmp.left && root !== tmp.left && root !== tmp.right) {
      stack.push(tmp.left);
    } else if(tmp.right && root !== tmp.right) {
      stack.push(tmp.right)
    } else { 
      res.push(stack.pop().val);
      root = tmp;
    }
  }
  return res;
};

// 另一种思路，利用两个栈
var postorderTraversal = function(root) {
  let res = [];
  const stack1 = [];
  const stack2 = [];
  while(root || stack1.length){
    while(root) {
      stack2.push(root);
      stack1.push(root);
      root = root.right;
    }
    if(stack1.length){
      root = stack1.pop();
      root = root.left;
    }
  }
  while(stack2.length) {
    res.push(stack2.pop().val);
  }
}