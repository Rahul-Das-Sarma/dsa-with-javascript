function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    // Left
    quickSort(arr, start, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}
let resIdx = quickSort([4, 2, 1, 17, 8, 6, 5, 6, 7, 9, 3]);
console.log(resIdx);
