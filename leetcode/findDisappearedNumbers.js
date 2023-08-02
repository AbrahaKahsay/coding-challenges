/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let disappeared = [];
    // let arr = new Set(nums)
    let sorted = nums.sort()

    for(let i=0; i<=sorted.length; i++){
        if(i+1 != sorted[i]){
            disappeared.push(i)
        }
    }
    return disappeared
};
