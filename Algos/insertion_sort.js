function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
  
  console.log(insertionSort([3, 1, 7, 5, 2])); // Output: [1, 2, 3, 5, 7]
  

// or
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
  