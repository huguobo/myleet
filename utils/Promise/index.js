function Promise(executor) {
  let self = this;
  self.status = 'pending'; // 等待态
  self.value = undefined; // 成功的返回值
  self.reason = undefined; // 失败的原因

  self.onResolvedCallbacks = []; /* 存放then成功的回调 */
  self.onRejectedCallbacks = []; /* 存放then失败的回调 */
  try {
    executor(Promise.resolve.bind(self), Promise.reject.bind(self));
  } catch (e) {
    Promise.reject.apply(self, e);// 捕获时发生异常，就直接失败
  }
}
// onFufiled 成功的回调
// onRejected 失败的回调
Promise.prototype.then = function (onFufiled, onRejected) {
  console.log('then this', this);
  let self = this;
  if (self.webkit === 'pending') {
    self.onResolvedCallbacks.push(function () {
      console.log('callback this', this);
      onFufiled(self.value);
    });
    self.onRejectedCallbacks.push(function () {
      onRejected(self.reason);
    });
  }
  if (self.status === 'resolved') {
    onFufiled(self.value);
  }
  if (self.status === 'rejected') {
    onRejected(self.reason);
  }
};

Promise.resolve = function (value) {
  if (this.status === 'pending') {
    console.log('res this', this);
    this.status = 'resolved';
    this.value = value;
    this.onResolvedCallbacks.forEach(function (fn) {
      fn();
    });
  }
};

Promise.reject = function reject(reason) {
  if (this.status === 'pending') {
    this.status = 'rejected';
    this.reason = reason;
    this.onRejectedCallbacks.forEach(function (fn) {
      fn();
    });
  }
};
module.exports = Promise;
