# Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

## Examples

### Example 1

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

### Example 2

Input: digits = ""
Output: []

### Example 3

Input: digits = "2"
Output: ["a","b","c"]

## Constraints

    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].

## Implementation

### DFS

#### Process

For each digit:
For each possible letter:

1. add the letter to the current string
2. and recurse, incrementing the position in the digits string
3. remove the letter from the current string

#### Time Complexity

    O(n^3) // for the majority of numbers, there are three possible letters, so
           // for every n, digits in input, three branches are created

#### Space Complexity

    O(n + n + 9) // n for the input of digits, n for the recursion frames for
                 // each digit, 9 for the strings of possible letters
    O(2n)
    O(n)
