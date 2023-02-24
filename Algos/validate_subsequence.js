// Intialize a pointer which at index zero of the sequence
//loop through the main array
//compare if each element in array is equal to the sequence element
// Increment the pointer to check next element in sequence
// finally return true if the length of the pointer is equal to length of the sequence

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqIdx = 0;
    for(let i=0; i<array.length; i++){
      if(array[i]===sequence[seqIdx]){
        seqIdx++
      }
      if (seqIdx===sequence.length){
        return true
      }
    }
    return false
  }