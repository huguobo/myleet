// 使用递归的方式实现数组、对象的深拷贝
function deepClone(obj) {
  // 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  // 进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
module.exports = deepClone;


// 使用stringfy的方式不能处理对象中方法的，undefined 或者 symbol 的深拷贝

function deepClone2(obj) {
  var tmp = JSON.stringify(obj);
  var objClone = JSON.parse(tmp);
  return objClone;
}
