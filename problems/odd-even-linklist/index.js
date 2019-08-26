// 奇偶链表
var oddEvenLinklist = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var tmp = head;
  var evenHead = head.next;
  var lastOdd = head;
  var isOdd = true;
  while (tmp && tmp.next) {
    var next = tmp.next;
    tmp.next = tmp.next.next;
    if (isOdd) {
      lastOdd = tmp.next || tmp;
    }
    tmp = next;
    isOdd = !isOdd;
  }
  lastOdd.next = evenHead;
  return head;
};
module.exports = oddEvenLinklist;
