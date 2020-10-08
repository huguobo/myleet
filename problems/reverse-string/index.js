const reverse = arr =>  {
  let end = arr.length -1;
  for(let i = 0; i < end; i++) {
    [arr[end], arr[i]] = [arr[i], arr[end]];
    end --;
  }
}