// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        carry += i >= 0 ? parseInt(a[i--], 2) : 0;
        carry += j >= 0 ? parseInt(b[j--], 2) : 0;
        result = (carry % 2) + result;
        carry = Math.floor(carry / 2);
    }

  return result;
};