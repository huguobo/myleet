var ListNode = require('../../data-structure/listNode');
var genrateListnode = ListNode.generate;
module.exports = [
  {
    input: [genrateListnode('135'), genrateListnode('246')],
    output: genrateListnode('123456')
  },
  {
    input: [null, null],
    output: null
  }
];
