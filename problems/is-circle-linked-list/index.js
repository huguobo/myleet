// 判断一个链表是否存在环
// 1 遍历标记法
const isCircle = (head) => {
  if(!head) {
    return false;
  }
  while(head) {
    if(head.flag) return true
    head.flag = true;
    head = head.next;
  }
  return false;
}

// 2 快慢指针
const isCricle = head => {
  if(!head || !head.next) {
    return false;
  }
  let fast = head.next.next;
  let slow = head;
  while(fast !== slow) {
    if(!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
}