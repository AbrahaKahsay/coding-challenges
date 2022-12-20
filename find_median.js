// This an interview test from Hackerank for day 1.
// The intention here is to find the median for array with odd number of elements

function median(arr){
    let sorted = arr.sort((a,b)=> a-b);
    let mid;
    for(let i=0; i<sorted.length; i++){
        mid = Math.floor(sorted.length/2)
    }
    return sorted[mid]
  
}
console.log(median([1,100, 103, 2, 99,43, 3, 4, 5, 8, 22, 55, 77]))