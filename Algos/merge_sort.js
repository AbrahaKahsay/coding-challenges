function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return result.concat(left, right);
  }
  
  // Usage example:
  const arr = [3, 5, 2, 1, 4];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr); // Output: [1, 2, 3, 4, 5]
  