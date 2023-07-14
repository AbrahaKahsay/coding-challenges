/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
       // declaring empty hashes to count the frequency of characters
    
  // Count the frequency of characters in string s  
  let sCount = {};
    for(let i=0; i<s.length; i++){
        if(!sCount[s[i]]){
            sCount[s[i]] = 1;
        } else {
            sCount[s[i]]++;
      }
    }

  // Count the frequency of characters in string t  
  let tCount = {};
    for(let i=0; i<t.length; i++){
        if(!tCount[t[i]]){
        tCount[t[i]] = 1;
        } else {
            tCount[t[i]]++;
        }
    }

  //Compare the values in both hash maps
  for(let key in sCount){                    
        if (sCount[key] !== tCount[key]){
            return false;
        }
    }
    return true;
    
};
