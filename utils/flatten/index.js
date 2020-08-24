// [][][] ... => []
// 
const flatten = (nestArr) => {
  return nestArr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, []);
}


// 按给定深度展开
const faltByNum = (nestArr, deepNumMax, curDeep = 1) => {
  let result = [];
  result = nestArr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) && curDeep < deepNumMax ? faltByNum(cur, deepNumMax, curDeep + 1) : cur);
  }, []);
  return result;
};
