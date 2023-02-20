// let's have a shifted array

let arr = [12, 13, -2, 3, 4, 5, 6, 7, 8]    //let's target = 3

function shiftedBinarySearch(arr, target){
    let left = 0
    let right = arr.length-1;

    while( left <= right){
        let mid = Math.floor((left+right)/2)

    if(arr[mid]==target){
        return mid
    }

    }

    return -1
}