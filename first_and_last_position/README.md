# Find Fist And Last Position of Element in Sorted Array

[leetcode question](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

## Examples

### Example 1

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

### Example 2

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

### Example 3

Input: nums = [], target = 0
Output: [-1,-1]

 

## Constraints

    0 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
    nums is a non-decreasing array.
    -10^9 <= target <= 10^9

## Implementation

### Divide and search

#### Process

1. use 2 pointers to track the bounds of the array wherein we search for the target
2. calculate a mid pointer between the outer pointers
3. while the value in the array at the midpoint does not equal the target:

    a. if the value in the array is greater than the value at the midpoint, adjust the upper bound to be mid
    b. otherwise adjust the lower bound to be mid + 1

4. if the value in the array at mid - 1 is greater than or equal to the target, adjust the bounds of the search area such that the lower bound is 0 and the upper bound is now set to mid, and repeat the above process.
5. Once mid points to the target value and mid - 1 points to the first value less than the target, mid represents the left bound to return
6. Set lower bound to be equal to mid, upper bound to the array boundary, and repeat the above process looking for the value at mid to be the target and the value at mid + 1 to be the first value greater than the target. This value will represent the right bound to return.

#### Time Complexity

    O(2 * log n) // log n to find the left most bound, log n to find the right bound
    O(log n)

#### Space Complexity

    O(n) // the space to hold the original array
