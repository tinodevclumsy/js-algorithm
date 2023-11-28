// A  stack is a data structure has a list of elements
// follows LIFO order (Last In, First Out)

// Using Array

let stackByArray = [];

stackByArray.push(1); // [1]
stackByArray.push(2); // [1,2]

console.log(stackByArray);
let p = stackByArray.pop(); // 2

// From scratch using singly linked list

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      var prev = this.first;
      this.first = node;
      node.next = prev;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp.value;
  }
}
