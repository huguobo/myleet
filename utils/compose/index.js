var compose = function (...fns) {
  return (...args)=>fns.reduce(function (a, b) {
    return a(b(...args));
  });
};

// reduceRight
const compose2 = (...fns) => {
  return (args) => fns.reduceRight((acc, cur) => {
    return cur(acc);
  }, args)
};

module.exports = compose;
