# Combination Sum

[leetcode question](https://leetcode.com/problems/combination-sum/description/)

## Explanation

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

## Examples

### Example 1

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

### Example 2

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

### Example 3

Input: candidates = [2], target = 1
Output: []

 

## Constraints

    1 <= candidates.length <= 30
    2 <= candidates[i] <= 40
    All elements of candidates are distinct.
    1 <= target <= 40

## Implementation

### Recursive DFS

#### Process

1. sort the candidates to prevent duplicates
2. create an array to track the current list of candidates
3. create a pointer to track position in candidates array
4. create an array to hold the completed lists
2. for each candidate, 
    a. recurse without using the current candidate and increase the pointer
    b. add the current candidate to the list, reduce the target by the current candidate, recurse without incrementing the pointer, pop the current candidate when the function returns

#### Time Complexity

    O(2 ^ (target / min(candidate))) // 
    O(2 ^ target) // as minimum candidate goes to 1


#### Space Complexity

    O(target / min(candidates)) // the maximum number of elements that may be in the call stack and the current candidates array
