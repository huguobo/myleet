// function curry(fn) {
//   let length = fn.length;
//   let args = [];
//   return function curryFn(...curryArgs) {
//       args = args.concat(curryArgs);
//       if (args.length > length) {
//           throw new Error('arguments length error')
//       }
//       if (args.length === length) {
//           return fn(...args);
//       }
//       return curryFn;
//   }
// }
const curry = fn => {
  const length = fn.length;
  let args = [];
  const curryFn = (...curryArgs) => {
    args = args.concat(curryArgs);
    if(args.length > length){
      throw new Error('arguments length error')
    }
    if(args.length === length){
      // 释放
      const usedArgs = args;
      args = [];
      return fn(...usedArgs)
    }
    return curryFn;
  }
  return curryFn;
}


const sum = (a,b,c,d) => a+b+c+d;

// test
const currySum = curry(sum);
console.log(currySum(1)(2)(3,4) === 10);
console.log(currySum(1,2,3)(4) === 10);
console.log(currySum(1)(2)(3)(4));