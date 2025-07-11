# Container With Most Water
[leetcode question](https://leetcode.com/problems/container-with-most-water/description/)

## Description

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Examples

### Example 1


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

### Example 2

Input: height = [1,1]
Output: 1
 

## Constraints

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

## Implementations

### Brute Force

#### Process

for every index, check volume created with every other index
keep track of maximum volume

#### Time Complexity

> O(n * n) // 1 visit to every height for every height
> O(n^2)

#### Space Complexity

> O(n) // the height values

### End Pointers

#### Process

- two pointers for the current indexes to test against
- start the pointers as far out as possible (0, height.length)
- keep a running max area
- test current end points, whichever side is smaller, move that side inward

#### Time Compexity

> O(n) // only visit each data once

#### Space Complexity

> O(n) // the height values
