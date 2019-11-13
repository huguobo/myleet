// 集合

function Set() {
  var items = {};
  this.has = function (v) {
    return Object.keys(items).indexOf(v) !== -1;
  };
  this.add = function (v) {
    if (!this.has(v)) {
      items[v] = v;
      return true;
    }
    return false;
  };
  this.delete = function (v) {
    if (this.has(v)) {
      delete items[v];
      return true;
    }
    return false;
  };
  this.keys = function () {
    return Object.keys(items);
  };
  this.values = function () {
    return this.keys(items);
  };
  this.clear = function () {
    items = {};
  };
}
