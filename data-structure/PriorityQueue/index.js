function PriorityQueue() {
  this.items = [];
}

function QueueElement(value, priority) {
  this.value = value;
  this.priority = priority;
}


// priority 值越小，优先级越高

PriorityQueue.prototype.enqueue = function (ele) {
  if (!this.items.length) {
    this.items.push(ele);
  } else {
    var added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (ele.priority < this.items[i].priority) {
        this.items.splice(i, 0, ele);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(ele);
    }
  }
};

PriorityQueue.prototype.dequeue = ()=>{
  return this.items.shift();
};
