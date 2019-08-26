// 验证栈序列

var stackSequence = function (pushed, popped) {
  var myStack = [];
  var popIndex = 0;
  for (let item of pushed) {
    myStack.push(item);
    while (myStack.length && myStack.slice(-1)[0] === popped[popIndex]) {
      myStack.pop();
      popIndex++;
    }
  }
  return popIndex === popped.length;
};

module.exports = stackSequence;
