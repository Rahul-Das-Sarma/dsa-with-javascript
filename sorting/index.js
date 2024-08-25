// bubble sort
const the_array = [5, 4, 6, 2, 14, 1];
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let temp = arr[j + 1];
      if (arr[j] > arr[j + 1]) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log("bubbleSort", bubbleSort(the_array));

// Selection sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let miniIndex = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[miniIndex]) {
        miniIndex = j;
      }
    }
    if (miniIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[miniIndex];
      arr[miniIndex] = temp;
    }
  }
  return arr;
};

console.log("Selection sort", selectionSort(the_array));
