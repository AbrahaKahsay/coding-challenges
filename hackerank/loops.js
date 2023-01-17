/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    
     for(let i=0; i<s.length; i++){
         if(vowels.includes(s[i])){
          console.log(s[i])
         }
     }
     
    for(let j=0; j<s.length; j++){
         if(consonants.includes(s[j])){
          console.log(s[j])}
    }
 }
 