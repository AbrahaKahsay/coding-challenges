/**
 * @param {number[]} height
 * @return {number}
 */
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
