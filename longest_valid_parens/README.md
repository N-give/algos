# Longest Valid Parentheses

[leetcode question](https://leetcode.com/problems/longest-valid-parentheses/description/)

## Explanation

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses.

## Examples

### Example 1

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

### Example 2

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

### Example 3

Input: s = ""
Output: 0

## Constraints

    0 <= s.length <= 3 * 104
    s[i] is '(', or ')'.

## Implementation

### Dynamic Programming

#### Process

1. use a variable to store the overall maximum
2. use an extra array to hold historic longest valid parentheses, dp[s.length + 1]
3. for each character in the string:
    a. if the current char is "(", do nothing -- only valid parentheses will end on ")"
    b. if the current char is ")" and
        the previous char is "(",
        get the current longest by adding 2 to dp[i - 2]
    c. if the current char is ")" and
        the previous char is ")", and
        the char preceeding the previous longest parentheses, s[i - dp[i - 1] - 2], is "(",
        the current longest will be the previous longest plus 2 plus the length for preceeding the opening parenthesis the current char
        -> dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
4. update the overall maximum if necessary

#### Time Complexity

    O(n) // iterate through the array once

#### Space Complexity

    O(n + n) // n for the input string, n for the dp array
    O(2n)
    O(n)
