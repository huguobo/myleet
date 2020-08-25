/*
 * 实现一个流水线控制类, 类似于gulp的接口
 * 支持串行和并行的执行任务(函数)
 * */
class Pipeline {
  constructor() {
      this.isFinish = false; // 是否finish
      this.handlers = [];
  }

  /**
   * 增加方法
   */
  addHandlers() {
      if(this.isFinish) return;
      this.handlers.push(...arguments);
  }

  series(...args) {
      this.addHandlers(...args);
      return this;
  }

  // 并行以数组存入handlers中
  parallel(...args) {
      this.addHandlers(args);
      return this;
  }

  next(pre) {
      const item = this.handlers.shift();
      if(!item) return;

      // parallel
      if(Array.isArray(item)) {
          const len = item.length;
          const result = [];
          let count = 0;
          const callback = (error, res) => {
              if(error instanceof Error) {
                  throw error;
              }
              result.push(res);
              count += 1;
              if(count === len) {
                  this.next(result);
              }
          }
          item.forEach(i => i(callback, pre))
      } else {
          const res = item(pre);
          this.next(res);
      }
  }

  start() {
      try {
          this.next(undefined);
      } catch(e) {
          this.onCatch && this.onCatch(e);
      }
      return this;
  }

  catch(fn) {
      this.onCatch = fn;
      return this;
  }

  finish(fn) {
      this.addHandlers(fn);
      this.isFinish = true;
      return this;
  }
}
module.exports = Pipeline;
