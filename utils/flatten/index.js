// [][][] ... => []
// 
const flatten = (nestArr) => {
  return nestArr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, []);
}



