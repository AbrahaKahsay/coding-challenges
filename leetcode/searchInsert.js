/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min = 0; //pointer one or the forst element in the array
    let max = nums.length-1; // pointer two or the last pointer in the array
    

    // now i have all the pointers
    // check the position of the target
   while(min <= max){
       let mid = Math.floor((min+max)/2); // checkong the mid position
    if (nums[mid] === target){ //If target is found at the middle just return the index
        return mid;
    } else if(target > nums[mid]){      // If target is in the right half
       min = mid + 1; 
    } else {
        max = mid -1
    } 
    }
    return min
};
