class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var node = new Node(val);
    if (!this.fisrt) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node; 
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var next = this.first.next;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = next;
    this.size--;
    return this.first;
  }
}
