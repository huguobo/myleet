// 汉诺塔

function hanno (A, B, C) {
  function move(n, A, B, C) {
    if(n === 1) {
      C.push(A.pop())
    } else {
      move(n-1, A, C, B);
      C.push(A.pop());
      move(n-1, B, A, C);
    }
  }
  move(A.length, A, B, C);
}