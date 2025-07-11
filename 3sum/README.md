# 3 Sum

[leetcode question](https://leetcode.com/problems/3sum/description/)

## Description

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

## Examples

### Example 1

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

### Example 2

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

### Example 3

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

## Constraints

`3 <= nums.length <= 3000`
`-105 <= nums[i] <= 105`

## Implementations

### Brute Force

#### Process

1. use 3 iterators
2. start them all next to each other, i = 0, j = 1, k = 2
3. iterate through all elements such that i is always the first, k is always the last, and j is always between the others

#### Time Complexity

> O(n^3) // one `n` for every iterator

#### Space Complexity

> O(m) // m is the number of possible triplets that can be formed from the elements of the input array (nPr?).

### Two Sum Plus

#### Process

1. sort the array
2. use 3 pointers, i, j, and k
3. i iterates through all elements
4. j and k perform 2 sum with a target of -nums[i]
    a. if nums[j] + nums[k] < target -- increment j
    b. if nums[j] + nums[k] > target -- decrement k
    c. else add combination to set

#### Time Complexity

> O(n^2) // n for i iterating through all elements, n for 2 sum algo

#### Space Complexity

> O(m) // m is the number of possible triplets that can be formed from the elements of the input array (nPr?).
