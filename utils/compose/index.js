var compose = function (...fns) {
  return (...args)=>fns.reduce(function (a, b) {
    return a(b(...args));
  });
};

module.exports = compose;
