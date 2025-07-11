# ZigZag Conversation
[leetcode question](https://leetcode.com/problems/zigzag-conversion/)

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

> P   A   H   N
> A P L S I I G
> Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

## Examples

### Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

### Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

Explanation:

> P     I    N
> A   L S  I G
> Y A   H R
> P     I

### Example 3:

Input: s = "A", numRows = 1
Output: "A"


## Constraints

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

## Implementations

### Brute Force

#### Process

1. Allocate grid to store "zigzag" string
2. Iterate through string and use local variable to store which row the next
   character should go into
3. Collect the letters back into a string

#### O(n) Time Complexity

> O(n + n) // n for storing the values into the grid, n for putting the letters into the result string
> O(2n)
> O(n) // constant factors can be ignored

#### O(n) Space Complexity

> O(n + n + n) // n for the original string, n for the intermediate matrix, n for the result string
> O(3n)
> O(n) // constanct factors can be ignored


### String Indexing

#### O(n) Time Complexity

> O(n) // visit every element in the array

#### O(n) Space Complexity

> O(n + n) // original string + result string
> O(2n)
> O(n)
