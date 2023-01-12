// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
    
    let a_decimal = parseInt(a, 2);
    let b_decimal = parseInt(b, 2);

    let c = a_decimal + b_decimal
    return c.toString(2)
};