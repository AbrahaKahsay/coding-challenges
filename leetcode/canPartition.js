/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) {
    return false;
  }

  const targetSum = totalSum / 2;

  function canPartitionHelper(index, sum) {
    if (sum === targetSum) {
      return true;
    }

    if (sum > targetSum || index >= nums.length) {
      return false;
    }

    // Include the current number in the subset
    if (canPartitionHelper(index + 1, sum + nums[index])) {
      return true;
    }

    // Skip the current number in the subset
    return canPartitionHelper(index + 1, sum);
  }

  return canPartitionHelper(0, 0);
};
