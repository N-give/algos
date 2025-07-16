# First Missing Positive

[leetcode](https://leetcode.com/problems/first-missing-positive/description/)

Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

## Examples

### Example 1

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

### Example 2

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

### Example 3

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.

## Constraints

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1

## Implementation

### Swap in place

#### Process

All elements [1,n] can be considered to have their own position in the array
such that e belongs in e - 1, i.e. [1, 2, 3].

Iterate through all elements and swap them into their designated position

1. for all positions, i, while:

    a. the value at position i, x, falls within [1, n]
    b. the value at position i, x, is not the same as the value at x - 1
    c. the position i is not the target location, x - 1

swap the value at position i and the value at x - 1

2. iterate though the array again and find the first element that is not i + 1
3. if no element is out of place, the value should be n + 1, one more than the number of elements in the array

#### Time Complexity

    O(n + n) // n to swap all elements into the correct position, n to find the missing element
    O(2n)
    O(n)

#### Space Complexity

    O(n) // all operations are performed in place

