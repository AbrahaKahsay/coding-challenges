
function main() {
    const n = parseInt(readLine().trim(), 10);
    // convert n into binary
    // loop through the array to check if the next
    // element is same with the previous and count
    let arr = n.toString(2);
    let count = 0;
    for(let i=0; i<newArr.length; i++){
        // console.log(newArr[i])
        if(newArr[i] == newArr[i+1]){
            count++;
        } else {
            count = 1
        }
    }
    console.log(count);
}