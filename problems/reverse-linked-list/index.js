// var reverseLinkedList = function (head) {
//   if (!head || !head.next) {
//     return head;
//   }
//   var newHead = reverseLinkedList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// };
var reverseLinkedList = function (head) {
  let res = null;
  while (head) {
    var tmp = head.next;
    head.next = res;
    res = head;
    head = tmp;
  }
  return res;
};

module.exports = reverseLinkedList;
