// Mini-Max Sum

// Given five positive integers, find the minimum and maximum values that can be calculated by
//  summing exactly four of the five integers. Then print the respective minimum and maximum 
//  values as a single line of two space-separated long integers.

// Example

// arr = [1,3,5,7,9]
// The minimum sum is 1+3+5+7 = 16
// The maximum sum is 3+5+7+9 = 24


// psudocode

// 1. First, I will sort the array in ascending order
// 2. Then, I will loop through the array to find the sum
// 3. For miniumunm sum, leave the last element
// 4. For maximum sum leave the first element

function miniMaxSum(arr) {
let arr_sorted = arr.sort( a,b => a-b )

let min_sum = 0;
let max_sum = 0;

for(let i=0; i<arr_sorted.length-1; i++){
    return min_sum += arr_sorted[i]
}

for(let i=1; i<arr_sorted.length; i++){
    return max_sum += arr_sorted[i]
}
}

miniMaxSum([1,3,5,7,9])
