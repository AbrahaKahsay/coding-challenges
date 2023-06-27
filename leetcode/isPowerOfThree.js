// Recursion Problem
// Given an integer n, return true if it is a power of three. Otherwise, return false.

/**
 * @param {number} n
 * @return {boolean}
 **/
var isPowerOfThree = function(n) {
// base cases, if n=1, return true
if(n===1){
    return true
}
// if n<0 or n % 3 is not equal to zero, return false which is another base case
else if(n<=0 || n%3 !== 0){
    return false
}
//Recursive cases
else
return isPowerOfThree(n/3)
    
};
