var ListNode = require('../../data-structure/listNode');

var mergeLists = function (l1, l2) {
  var res = new ListNode();
  var cur = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return res.next;
};

module.exports = mergeLists;
