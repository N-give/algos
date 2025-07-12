# Merge K Sorted Lists

[leetcode question](https://leetcode.com/problems/merge-k-sorted-lists/)

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

## Examples

### Example 1

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

### Example 2

Input: lists = []
Output: []

### Example 3

Input: lists = [[]]
Output: []

## Constraints

    k == lists.length
    0 <= k <= 104
    0 <= lists[i].length <= 500
    -104 <= lists[i][j] <= 104
    lists[i] is sorted in ascending order.
    The sum of lists[i].length will not exceed 104.

## Implementations

### Heap Merge

#### Process

1. sort the input array into a heap
2. pull nodes off of the heap to put into the sorter linked list

#### Time Complexity

> O(n2log(n)) // n for each element, 1 log(n) for removal, 1 log(n) for inserting the remained of the sorted list
> O(nlog(n))

#### Space Complexity

> O(n) // reusing the list nodes
