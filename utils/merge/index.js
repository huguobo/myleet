const has = (o, key) => o.hasOwnProperty(key)
const isObj = o => Object.prototype.toString.call(o) === '[object Object]'

module.exports = function merge(base, append) {
  Object.keys(append).forEach( key => {
    if (isObj(append[key]) && has(base, key)) {
      merge(base[key], append[key])
    } else {
      base[key] = append[key]
    }
  })
  return base
}