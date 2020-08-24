const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  }
};
module.exports = debounce;