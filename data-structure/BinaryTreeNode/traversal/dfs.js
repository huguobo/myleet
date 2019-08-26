// 深度优先遍历，借用栈实现
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
