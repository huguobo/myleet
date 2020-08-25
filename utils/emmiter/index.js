/*
 * 实现一个事件派发器类，
 * 可以通过其实例的on/off/emit等接口，进行自定义时间的监听，移除或触发
 * */

class Emmiter {
  constructor() {
      this.listeners = {};
  }
  
  // 获取name对应的绑定事件，数组形式
  getEvents(name){
      if(!this.listeners[name]) {
          this.listeners[name] = [];
      }
      return this.listeners[name];
  }

  on(name, handler) {
      const list = this.getEvents(name);
      list.push(handler);
      return [name, list.length - 1];
  }

  once(name, handler) {
      const wrapHandler = (...args) => {
          this.off(wrapHandler);
          return handler.call(this, ...args);
      }
      return this.on(name, wrapHandler);
  }
 
  off(flag) {
      // on的返回值移除事件
      if(Array.isArray(flag)) {
          const name = flag[0];
          const index = flag[1];
          const list = this.getEvents(name);
          list.splice(index, 1);
      } else if (typeof flag === 'function') {
          for (const key in this.listeners) {
              if (this.listeners.hasOwnProperty(key)) {
                  const handlers = this.listeners[key];
                  this.listeners[key] = handlers.filter(fn => fn !== flag);
              }
          }
      // 移除事件名下所有绑定事件
      } else if (typeof flag === 'string') { 
          this.listeners[flag] = undefined;
      }
  }

  emit(name, args = []) {
      const list = this.getEvents(name);
      const result = [];
      for(let i = list.length - 1; i >= 0; i--){
          const res = list[i](...args);
          if(res === false) {
              break;
          }
          result.push(res);
      }
      return result;
  }

  // 重置所有绑定事件
  dispose() {
      this.listeners = {};
  }
}
module.exports = Emmiter;
