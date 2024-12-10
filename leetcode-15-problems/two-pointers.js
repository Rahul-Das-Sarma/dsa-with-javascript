// Input: nums = [1, 2, 3, 4, 6], target = 6

// Output: [1, 3]

const nums = [1, 2, 3, 4, 6],
  target = 6;

function twoPointers(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoPointers(nums, target));
