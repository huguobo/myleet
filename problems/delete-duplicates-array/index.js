/* eslint-disable no-undef */
var deleteDuplicates = function (arr) {
  if (!arr || !Array.isArray(arr)) {
    return arr;
  }
  return Array.from(new Set(arr));
};
module.exports = deleteDuplicates;
