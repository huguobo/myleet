var ListNode = require('../../data-structure/listNode');
var genLinkList = ListNode.generate;
module.exports = [
  {
    input: [genLinkList('12345')],
    output: genLinkList('13524')
  },
  {
    input: [genLinkList('12')],
    output: genLinkList('12')
  },
  {
    input: [null],
    output: null
  }
];
