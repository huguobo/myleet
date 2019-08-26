// 广度优先遍历，借用队列实现
var bfs = function (root, handler) {
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var node = queue.shift();
    console.log(node.val);
    if (typeof handler === 'function') {
      handler(root);
    }
    if (root.left) {
      queue.push(root.left);
    }
    if (root.right) {
      queue.push(root.right);
    }
  }
};
module.exports = bfs;
