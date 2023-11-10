class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  shift() {
    if (this.length === 0) return undefined;
    var node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }
  unshift(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, node;
    if (index <= this.length / 2) {
      node = this.head;
      count = 0;
      while (index !== count) {
        node = node.next;
        count++;
      }
    } else {
      node = this.tail;
      count = this.length - 1;
      while (index !== count) {
        node = node.prev;
        count--;
      }
    }

    return node;
  }

  set(index, value) {
    var node = this.get(index);
    if (!node) return false;

    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < -1 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    var node = new Node(value);
    var before = this.get(index - 1);
    var after = before.next;

    before.next = node;
    node.prev = before;
    node.next = after;
    after.prev = node;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var node = this.get(index);
    var before = node.prev;
    var after = node.next;
    before.next = after;
    after.prev = before;

    node.next = null;
    node.prev = null;

    this.length--;

    return node;
  }
}
