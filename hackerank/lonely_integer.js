// Given an array of integers, where all elements but one occur twice,
// find the unique element.

// Example
// a = [1,2,3,4,3,2,1]

// The unique element is 4.

function lonelyinteger(a) {
    // Write your code here
    let unique_arr = [...new Set(a)]
    console.log(unique_arr)
    let result = []
    for(let i=0; i<a.length; i++){
        for (let j=0; j<unique_arr.length; j++){
            if (unique_arr[j] != a[i]){
               result.push(a[i])
            }
        }
        
    }
    // return result
    console.log(result)
}

lonelyinteger([1,2,3,4,3,2,1])