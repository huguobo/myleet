function Queue() {
  this.dataStore = [];
  this.enqueue = function (val) {
    this.dataStore.push(val);
  }; // 入队
  this.dequeue = function () {
    return this.dataStore.shift();
  }; // 出队

  this.front = function () {
    return this.dataStore[0];
  }; // 查看队首元素
  this.back = function () {
    return this.dataStore.slice(-1)[0];
  }; // 查看队尾元素
  this.toString = function () {
    return this.dataStore.toString();
  }; // 显示队列所有元素
  this.clear = function () {
    this.dataStore = [];
  }; // 清空当前队列
  this.empty = function () {
    return !this.dataStore.length;
  }; // 判断当前队列是否为空
}

module.exports = Queue;
