class PromisePool {
  constructor(max) {
    this.max = max || 1;
    this.pool = [];
    this.pending = [];
  }

  add (promiseFactory) {
    return new Promise((resolve, reject) => {
      const promiseExcutor = () => {
        // 执行
        const promise = promiseFactory();
        promise.then(resolve, reject);
        // 删除索引
        const index = this.pools.indexOf(promiseExcutor);
        this.pools.splice(index, 1);
        // 补充一个 pendding 状态进入队列（如果有）
        if (this.pending.length > 0) {
          const p = this.pending.shift();
          this.pools.push(promiseExcutor);
          p();
        }
      };

      if (this.pools.length < this.max) {
        this.pool.push(promiseExcutor);
        promiseExcutor();
      } else {
        this.pending.push(promiseExcutor);
      }
    })
  }
}