// let say we have sorted array 
// write a function that takes array and target to find the target using a binary search

let array = [-1, 3, 5, 6, 10, 14, 18]

function search(array, target){
    let left = 0;
    let right = array.length-1;

    while ( left <= right){
        let mid = Math.floor((left+right)/2)

        if(array[mid]==target){
            return mid
        }
        
        if (target < array[mid]){
            right = mid-1
        } 
        else {
            left = mid+1
        }
    }

    return -1     //this is to define the target doesent exist in the array (left<right) range
}

let s = search(array, 14)
console.log(s)