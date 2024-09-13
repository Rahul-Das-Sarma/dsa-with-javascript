// To Calculate parent (n-1)/2
// To calulate chile 1 (2n +1), child 2 (2n + 2), n  here is index
class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleup();
    return this.values;
  }

  bubbleup() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentValue = this.values[parentIdx];
      if (element <= parentValue) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentValue;
      idx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDownWithRecursion();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,
        rightChild,
        swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  sinkDownWithRecursion(idx = 0) {
    let length = this.values.length;
    let element = this.values[0];
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;
    if (leftChildIdx < length) {
      leftChild = this.values[leftChildIdx];
      if (leftChild > element) swap = leftChildIdx;
    }

    if (rightChildIdx < length) {
      rightChild = this.values[rightChildIdx];
      if (
        (swap === null && rightChild > element) ||
        (swap && rightChild > leftChild)
      ) {
        swap = rightChildIdx;
      }
    }
    if (swap === null) return; // Base case: stop if no swap is needed

    // Swap the element with the larger child
    this.values[idx] = this.values[swap];
    this.values[swap] = element;

    this.sinkDownWithRecursion(swap);
  }
}

const heap = new maxBinaryHeap();
// heap.insert(55);
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);
