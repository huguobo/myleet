// 删除链表重复节点
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  var res = head;
  var temp = res;
  while (temp && temp.next) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return res;
};

module.exports = deleteDuplicates;
