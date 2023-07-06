/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; // Declare empty stack
    
    for(let i=0; i<s.length; i++){
        let lastChar = stack[stack.length-1]  // last character in the stack for comparison
        if(s[i]==='('|| s[i]==='[' || s[i]==='{'){
            stack.push(s[i])
        } else if(s[i]===')'&& lastChar==='(' || s[i]===']'&& lastChar==='[' || s[i]==='}'&         lastChar==='{') {
            stack.pop();
        } else {
            return false
        }
    }
    return stack.length === 0 ? true: false
    
};
