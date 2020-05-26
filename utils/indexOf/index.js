// str
const sIndexOf = (str, searchStr, fromIndex) => {
  let regex = new RegExp(`${searchStr}`, 'ig')
  regex.lastIndex = fromIndex
  const result = regex.exec(str)
  return result ? result.index : -1 
};

// arr
const aIndexOf = (arr, searchItem, fromIndex) => {
  for(let i = fromIndex; i< arr.length; i++ ) {
    if(arr[i] === searchItem){
      return i;
    }
  }
  return -1;
}

const customIndexOf = (target, search, fromIndex) => {
  const isString = Object.prototype.toString.call(target) === "[object String]";
  const isArray = Array.isArray(target);
  if(!isString && !isArray)  throw new TypeError();
  if(isArray) return aIndexOf(target, search, fromIndex);
  else return sIndexOf(target, search, fromIndex);
} 

export default customIndexOf;
