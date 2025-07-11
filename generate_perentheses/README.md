# Generate Parentheses

[leetcode question](https://leetcode.com/problems/generate-parentheses/)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Examples

### Example 1

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

### Example 2:

Input: n = 1
Output: ["()"]
 

## Constraints

1 <= n <= 8

## Implementations

### Recursive

#### Process

- use a base case of n = 1 to return the list of ["()"]
- if n is greater than 1, generate the list of solutions for n - 1 and wrap all solutions in another set of parentheses
- from 1 to n, generate the set of solutions for i and n - i and combine them

##### Major problems

- recomputing a lot of solutions for n
- generating a lot of sequences multiple times

#### Time Complexity

> O(n * n... )

#### Space Complexity

> O(n...)

### Recursive with memoization

#### Process

- same as before, but subsequent calls for n - 1 solutions are not O(1) lookups
  instead of O(n*n...) computations

#### Time Complexity

> O(n * n) // this is wrong

#### Space Complexity

> O(n * n) // this is wrong
