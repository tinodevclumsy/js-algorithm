class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right - null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      var current = this.root;
      if (val === current.val) return undefined;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }
}
