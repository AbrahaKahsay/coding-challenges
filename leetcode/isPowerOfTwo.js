/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // base case
    if(n === 1) return true;
    if(n<=0) return false;
    // recursive case
    while(n>1){
        if(n%2 !=0){
            return false
        } else{
            return isPowerOfTwo(n/2)
        }
    }
};
