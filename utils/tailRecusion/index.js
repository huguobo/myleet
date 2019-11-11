const fib = (n) => {

};
const tailFib = (n, ret1 = 0, ret2 = 1)=>{
  if (n === 0) {
    return ret1;
  }
  return tailFib(n - 1, ret2, ret1 + ret2);
};

const factorial = (n)=>{
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const tailFactorial = (n, res = 1) => {
  if (n === 1) {
    return res;
  }
  return tailFactorial(n - 1, res * n);
};

console.log(tailFib(5));
console.log(factorial(3));
console.log(tailFactorial(3));
