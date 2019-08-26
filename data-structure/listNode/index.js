function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.generate = function (nums) {
  if (!nums) {
    return null;
  }
  var numArr = nums.split('');
  var root = new ListNode(numArr[0]);
  var cur = root;
  for (var i = 1; i < numArr.length; i++) {
    cur.next = new ListNode(numArr[i]);
    cur = cur.next;
  }
  return root;
};

ListNode.generateList2 = function (num) {
  var numbers = num.toString().split('').map(Number);
  var result;
  var tmp;
  numbers.forEach(function (number, index) {
    if (index === 0) {
      result = new ListNode(number);
      return;
    }
    tmp = new ListNode(number);
    tmp.next = result;
    result = tmp;
  });
  return result;
};

module.exports = ListNode;
