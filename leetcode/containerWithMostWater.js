/**
 * @param {number[]} height
 * @return {number}
 */

// This problem is of greedy algorithm type. we should approach from the maximum index difference which 
// we should use two pointers at the start and end until we get the desired output. this helps to optimize the 
// time complexity with the problem of using 2 for loops.
var maxArea = function(height) {
    let maxA = 0;
    let i = 0;
    let j = height.length-1

    while(i<j){
        let area = Math.min(height[i], height[j])*(j-i);
        if(area>maxA){
            maxA = area
        }
        if(height[i]<height[j]){
            i++; 
        }else {
            j--;
        }
    }
    return maxA
};
