// Given an array of integers and a positive integer k, 
// determine the number of (i,j) pairs where i<j and ar[i] + ar[j] is divisible by k.

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    
    for(let i=0; i<ar.length; i++){
        for(let j=0; j<=ar.length; j++){
            if(i<j && ((ar[i]+ar[j])%k == 0)){
                count++;
            }
        }
    }
    return count

}