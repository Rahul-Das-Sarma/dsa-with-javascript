// Frequency counter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return;
  }
  let frequencyCtr1 = {};
  let frequencyCtr2 = {};
  for (let val of arr1) {
    frequencyCtr1[val] = (frequencyCtr1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCtr2[val] = (frequencyCtr2[val] || 0) + 1;
  }
  for (let key in frequencyCtr1) {
    if (!(key ** 2 in frequencyCtr2)) return false;
    if (frequencyCtr2[key ** 2] !== frequencyCtr1[key]) return false;
  }

  return true;
}

const res = same([1, 2, 3], [4, 9, 1]);
console.log(res);
