# Reverse Nodes in K Groups

[leetcode](https://leetcode.com/problems/reverse-nodes-in-k-group/)

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

## Examples

### Example 1

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

### Example 2

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

## Constraints

    The number of nodes in the list is n.
    1 <= k <= n <= 5000
    0 <= Node.val <= 1000

## Implementation

### Process

Create the following pointers:

- `nextGroupHead` - points to the head of the next group to know when to stop reversing
- `current` - keeps track of the current head of the group
- `next` - points to the next node to move to the front of the group
- `tail` - points to the current last element of the group
- `prevTail` - points to the previous tail

Initialize all values to head.

1. Find the start of the next group by moving `nextGroupHead` to `nextGroupHead.next` `k` times or until `nextGroupHead` === `null`
2. If `nextGroupHead` reached `null` before `k` steps, return `head`
3. move `next` to `next.next`
4. while `next !== nextGroupHead` move each next element to the beginning of the group by following these steps:

    1. change `tail.next` to point to `next.next`
    2. change `next.next` to point to `current`
    3. move `current` to point to `next`
    4. move `next` to point to `tail.next`

5. if `head` is still pointing to `tail`, change it to point to `current` so that it will contain the new head of the resulting list
6. if `prevTail !== tail`, ensure that `prevTail.next` points to the new head of the next group, and update `prevTail` to point to `tail` in preparation for the next iteration
7. update both `current` and `tail` to point to `nextGroupHead`
8. repeat until early return or `nextGroupHead === null`

### Walkthrough

input = [1, 2, 3, 4, 5], k = 2

    h<-nextGroupHead<-current<-next<-tail<-prevTail
    |
    1->2->3->4->5


    h<-current<-tail<-prevTail
    |
    |  next
    |  |
    |  |  nextGroupHead
    |  |  |
    1->2->3->4->5


    h<-current<-tail<-prevTail
    |
    | nextGroupHead
    1-|
      3->4->5
    2-|
    |
    next
    
    h<-current<-tail<-prevTail
    |
    | nextGroupHead
    1-|
    | 3->4->5
    2
    |
    next
    
    next<-current
    |
    |  h<-tail<-prevTail
    |  |
    |  |  nextGroupHead
    |  |  |
    2->1->3->4->5

    current
    |
    |  h<-tail<-prevTail
    |  |
    |  |  nextGroupHead<-next
    |  |  |
    2->1->3->4->5

    h  prevTail
    |  |
    |  |  nextGroupHead<-next<-current<-tail
    |  |  |
    2->1->3->4->5

    h  prevTail
    |  |
    |  |  next<-current<-tail
    |  |  |
    |  |  |     nextGroupHead
    |  |  |     |
    2->1->3->4->5




