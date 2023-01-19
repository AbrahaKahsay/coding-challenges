function processData(input) {

  let str = input.split('\n').splice(1);
  for(let i=0; i<str.length; i++){
    let newStr = str[i].split('');
    let even = '';
    let odd= '';
      
    for(let j=0; j<newStr.length; j++){
      if(j%2 == 0){
        even += newStr[j]
      }
      else if(j%2 != 0){
        odd += newStr[j]
      }
    }
    console.log(even + " " + odd)
  }
  
} 
    