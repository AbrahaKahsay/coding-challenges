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

        // check which half is sorted
        if (arr[left] <= arr[mid]) {
            // left half is sorted
            if (target >= arr[left] && target < arr[mid]) {
            // target is in the left half
            right = mid - 1;
            } else {
            // target is in the right half
            left = mid + 1;
            }
        }else {
            // right half is sorted
            if (target > arr[mid] && target <= arr[right]) {
              // target is in the right half
              left = mid + 1;
            } else {
              // target is in the left half
              right = mid - 1;
            }
        }
    }
    // target not found
    return -1
}