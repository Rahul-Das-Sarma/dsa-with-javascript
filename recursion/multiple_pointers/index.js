function mulitplePointers(arr) {
  let first = 0;
  let last = arr.length - 1;
  let arr1 = [];
  while (first < last) {
    let sum = arr[first] + arr[last];
    if (sum === 0) {
      return arr1.push([arr[first], arr[last]]);
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
}
console.log(
  mulitplePointers([
    -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ])
);
