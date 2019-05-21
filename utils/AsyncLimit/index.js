/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
// 执行异步操作并有最大并发限制
/**
* @module asyncLimit
* @author: cooper
* @since: 2019-05-21 14:26:46
* @param  {number} limit 最大并发数
* @param  {array} arr 待处理队列数据
* @param  {function} fn 处理
* @param  {function} callback 处理完毕的回调函数
*/

var asyncLimit = function (limit, arr, fn, callback) {
  var callback = once(callback || function () { });
  var arr = arr || [];

  if (limit <= 0) {
    return callback();
  }

  var i = -1;
  var running = 0;
  var errored = false;
  replenish();
  function replenish() {
    // 当所有任务都已经加入到池子，且当前没有正在执行的任务
    // 说明所有任务都执行完毕，执行callback
    if (i >= arr.length && running <= 0) {
      return callback();
    }

    // 只要当前正在执行的任务个数小于限制数，且没有出错
    // 就继续向池子中添加任务
    while (running < limit && !errored) {
      // 如果没有任务可以添加，且没有任务正在运行
      // 说明所有任务都执行完毕，执行callback
      // 这里不需要对running>0的情况进行处理
      // 因为在done中会replenish，最终会进入上面的if判断
      if (++i >= arr.length) {
        if (running <= 0) {
          callback();
        }
        return;
      }

      running++;
      fn(arr[i], i, once(done), running);
    }
  }
  // 每个操作执行的回调
  function done(err) {
    running--;
    if (err) {
      callback(err);
      errored = true;
    } else {
      replenish();
    }
  }

  // 保证多次调用只执行一次
  function once(fn) {
    return function () {
      if (!fn) {
        return;
      }
      fn.apply(this, arguments);
      fn = null;
    };
  }
};
if (require.main === module) {
  var arr = ['1', '2', '3', '4'];

  asyncLimit(3, arr, function (item, index, done, running) {
    setTimeout(() => {
      console.log(item, index, running);
      done();
    }, 2000);
  }, function (err) {
    if (err) {
      throw err;
    }
    console.log('all done');
  });
}

module.exports = asyncLimit;
