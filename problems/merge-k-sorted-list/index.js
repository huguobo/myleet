// 合并k个有序链表
var ListNode = require('../../data-structure/listNode');

var mergeKlists = function (lists) {
  function mergeTwoList(l1, l2) {
    var res = new ListNode();
    var cur = res;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    cur.next = l1 || l2;
    return res.next;
  }
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }
  if (lists.length === 2) {
    return mergeTwoList(lists[0], lists[1]);
  }
  var mid = Math.floor(lists.length / 2);
  var l1 = lists.slice(0, mid);
  var l2 = lists.slice(mid);
  return mergeTwoList(mergeKlists(l1), mergeKlists(l2));
};

module.exports = mergeKlists;
