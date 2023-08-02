/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let seen = new Set();

    for(let i=0; i<nums.length; i++){
        seen.add(nums[i])
    }

    for(let j=1; j<=nums.length; j++){
        if(!seen.has(j)){
            result.push(j)
        }
    }

    return result
};
