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
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;

      while (index !== counter) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;

      while (index !== counter) {
        current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    // let foundNode = this.get(index);
    let beforeNode = this.get(index - 1);
    // The foundNode
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();

    let foundNode = this.get(index);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;

    return foundNode;
  }
}

const list = new DoublyLinkedList();

list.push("Hero");
list.push("is");
list.push("here");
list.shift();
list.unshift("Yo yo");
list.set(1, "Honey Singh");
// console.log(list.insert(2, "Party all night"));
// console.log("remove", list.remove(1));
console.log(list);
