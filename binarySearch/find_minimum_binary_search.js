function findMinimum(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    // if the array is not rotated, return the first element
    if (arr[left] < arr[right]) {
      return arr[0];
    }
  
    while (left <= right) {
      // calculate the middle index
      const mid = Math.floor((left + right) / 2);
  
      // check if arr[mid] > arr[mid + 1], return arr[mid + 1]
      if (arr[mid] > arr[mid + 1]) {
        return arr[mid + 1];
      }
  
      // check if arr[mid - 1] > arr[mid], return arr[mid]
      if (arr[mid - 1] > arr[mid]) {
        return arr[mid];
      }
  
      // if arr[mid] > arr[0], search in the right half
      if (arr[mid] > arr[0]) {
        left = mid + 1;
      } else {
        // else search in the left half
        right = mid - 1;
      }
    }
  
    // if the loop terminates without finding the minimum element,
    // the entire array is sorted and the minimum element is at arr[0]
    return arr[0];
}
  
  
  