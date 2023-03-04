function majorityElement(nums) {
    let map = new Map();
    let n = nums.length;
  
    for (let i = 0; i < n; i++) {
      let count = map.get(nums[i]) || 0;
      count++;
      if (count > n / 2) {
        return nums[i];
      }
      map.set(nums[i], count);
    }
  }
  