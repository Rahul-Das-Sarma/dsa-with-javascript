const nums = [1, 2, 3, 4, 5, 6];
const i = 1,
  j = 3;

function prefixSum(nums, i, j) {
  let sum = 0;
  for (let k = i; k <= j; k++) {
    sum += nums[k];
  }
  return sum;
}

console.log(prefixSum(nums, i, j));
