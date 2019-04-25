var ListNode = require('../../data-structure/listNode');
var genrateListnode = ListNode.generate;
module.exports = [
  {
    input: [[genrateListnode('15'), genrateListnode('26'), genrateListnode('34')]],
    output: genrateListnode('123456')
  }
];
