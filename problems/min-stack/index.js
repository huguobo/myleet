function MinStack() {
  this.stack = [];
}
MinStack.prototype.getLen = function () {
  return this.stack.length;
};
MinStack.prototype.push = function (x) {
  var min = this.getLen() === 0 ? x : this.stack[this.getLen() - 1].min;
  this.stack.push({ val: x, min: Math.min(x, min) });
};
MinStack.prototype.pop = function () {
  return this.stack.pop();
};
MinStack.prototype.getTop = function () {
  return this.stack[this.getLen() - 1].val;
};
MinStack.prototype.getMin = function () {
  return this.stack[this.getLen() - 1].min;
};

function testThis(handles, datas) {
  var stack = new MinStack();
  return handles.map(function (type, i) {
    var res;
    switch (type) {
      case 'pop':
        res = stack.pop().val;
        break;
      case 'push':
        stack.push(datas[i]);
        res = stack.stack.map(v => v.val);
        break;
      case 'getTop':
        res = stack.getTop();
        break;
      case 'getMin':
        res = stack.getMin();
        break;
      default:
        res = undefined;
        break;
    }
    return res;
  });
}

module.exports = testThis;
