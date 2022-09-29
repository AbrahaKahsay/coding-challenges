# Challenge 1. Contains Duplicate
===================================

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

# challenge solved using #set data structure as set will gives a unique values. 
set is not array and we should convert it using Array.from() method or array destructuring. [...new Set(nums)]

var containsDuplicate = function(nums) {
    let uniqueNums = Array.from(new Set(nums))
    if(nums.length > uniqueNums.length){
        return true
    } 
    else {
        return false
    }
};
