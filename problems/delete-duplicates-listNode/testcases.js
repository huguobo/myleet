var ListNode = require('../../data-structure/listNode');
var genrateListnode = ListNode.generate;
module.exports = [
  {
    input: [genrateListnode('112233')],
    output: genrateListnode('123')
  },
  {
    input: [null],
    output: null
  }
];
