// Input: nums = [2, 1, 5, 1, 3, 2], k = 3

// Output: 9

const nums = [2, 1, 5, 1, 3, 2],
  k = 3;

function maxSlidingWindow(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSlidingWindow(nums, k));
