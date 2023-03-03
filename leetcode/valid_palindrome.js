function isPalindrome(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Use two pointers to check if the string is a valid palindrome
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  