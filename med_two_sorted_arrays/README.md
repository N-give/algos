# Median of Two Sorted Arrays

[leetcode question](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

## Examples

### Example 1

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

### Example 2

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

## Constraints

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

## Implementations

### Merge Arrays and Calculate

#### Process

1. combine both arrays
2. find the median by definition

#### Time Complexity

    O(n + m) // n for moving all elements from one array, m for moving all elements from the other array

#### Space Complexity

    O(2 * (n + m)) // 1 for the input arrays, 1 for the merged array
    O(n + m)

### Walk Arrays

#### Process

1. use two pointers, 1 for the highest value, 1 for the lowest
2. use two more pointers to track current position in each array
2. walk the pointers together to find the median value

#### Time Complexity

    O(n + m) // n for all elements from one array, m for all elements from the other array

#### Space Complexity

    O(n + m) // 1 for the input arrays

