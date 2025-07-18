import { assertEquals } from "@std/assert";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function buildList(input: number[]): ListNode | null {
  if (input.length === 0) {
    return null;
  }
  const head = new ListNode(input[0]);
  let current = head;
  for (let i = 1; i < input.length; i++) {
    const next = new ListNode(input[i]);
    current.next = next;
    current = current.next;
  }
  return head;
}

function buildArray(head: ListNode | null): number[] {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let nextGroupHead: ListNode | null = head;
  let current: ListNode | null = head;
  let next: ListNode | null = head;
  let tail: ListNode | null = head;
  let prevTail: ListNode | null = head;
  while (nextGroupHead !== null) {
    let i = 0;
    // find next group head
    while (i < k && nextGroupHead !== null) {
      nextGroupHead = nextGroupHead.next;
      i++;
    }
    // verify that group fills k nodes
    if (i !== k) {
      return head;
    }
    next = next!.next;
    // reverse group
    while (next !== nextGroupHead && next !== null) {
      tail!.next = next.next;
      next.next = current;
      current = next;
      next = tail!.next;
    }
    if (head === tail) {
      head = current;
    }
    if (prevTail !== tail) {
      prevTail!.next = current;
      prevTail = tail;
    }
    current = nextGroupHead;
    tail = nextGroupHead;
  }
  return head;
}

const testCases = [{
  input: [],
  k: 2,
  expected: [],
}, {
  input: [1],
  k: 2,
  expected: [1],
}, {
  input: [1, 2],
  k: 2,
  expected: [2, 1],
}, {
  input: [1, 2, 3, 4, 5],
  k: 2,
  expected: [2, 1, 4, 3, 5],
}, {
  input: [1, 2, 3, 4, 5],
  k: 5,
  expected: [5, 4, 3, 2, 1],
}, {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  k: 2,
  expected: [2, 1, 4, 3, 6, 5, 8, 7, 9],
}, {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  k: 3,
  expected: [3, 2, 1, 6, 5, 4, 9, 8, 7],
}, {
  input: [1, 2, 3, 4, 5],
  k: 3,
  expected: [3, 2, 1, 4, 5],
}];

testCases.forEach(({ input, k, expected }, i) => {
  Deno.test(`Test ${i}`, () => {
    const inputHead = buildList(input);
    const actualHead = reverseKGroup(inputHead, k);
    const actual = buildArray(actualHead);
    assertEquals(actual, expected);
  });
});
