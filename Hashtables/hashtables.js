class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class HashTable {
  constructor() {
    this.values = null;
    this.next = null;
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDownWithRecursion();
    }
    return max;
  }
}
