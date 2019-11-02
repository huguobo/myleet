const tailFib = (n, ret1 = 0, ret2 = 1)=>{
  if (n === 0) {
    return ret1;
  }
  return tailFib(n - 1, ret2, ret1 + ret2);
};
console.log(tailFib(5));
