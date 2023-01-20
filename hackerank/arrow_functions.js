
//  Modify and return the array so that all even elements are doubled and all odd elements are tripled.

function modifyArray(nums) {
    return nums.map(num => num % 2 === 0 ? num * 2 : num * 3 );
}