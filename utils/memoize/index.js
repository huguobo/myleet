var memoize = function (f) {
  var cache = {};
  return function () {
    var argStr = JSON.stringify(arguments);
    cache[argStr] = cache[argStr] || f.apply(f, arguments);
    return cache[argStr];
  };
  memoize.clear = () => {
    cache = {};
  }
};
module.exports = memoize;
