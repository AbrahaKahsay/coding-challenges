/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
// Use binary search as it has log(n) time complexity
// Declare the pointers
// example for x = 4
//     __________________________
//     0          2             4
//   start       mid           end

  if (x === 0) {
    return 0;
  }

  let start = 1;
  let end = x;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;

};
