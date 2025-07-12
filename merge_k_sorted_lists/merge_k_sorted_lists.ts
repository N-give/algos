import { assertEquals } from "@std/assert";

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function toList(ns: number[]): ListNode | null {
  if (ns.length === 0) {
    return null;
  }
  return ns
    .map((n) => new ListNode(n))
    .reduceRight((acc, n) => {
      n.next = acc;
      return n;
    });
}

function fromList(head: ListNode | null): number[] {
  const res = [];
  while (head !== null) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

function parentIndex(i: number): number {
  return Math.floor((i - 1) / 2);
}

function leftChildIndex(i: number): number {
  return 2 * i + 1;
}

function rightChildIndex(i: number): number {
  return 2 * i + 2;
}

function heapifyHelper(
  ls: Array<ListNode>,
  i: number,
) {
  let iMin = i;
  const l = leftChildIndex(i);
  const r = rightChildIndex(i);
  if (!ls[iMin]) {
    return;
  }
  if (l < ls.length && ls[l].val < ls[iMin].val) {
    iMin = l;
  }
  if (r < ls.length && ls[r].val < ls[iMin].val) {
    iMin = r;
  }
  if (iMin !== i) {
    [ls[i], ls[iMin]] = [ls[iMin], ls[i]];
    heapifyHelper(ls, iMin);
  }
}

function heapify(ls: Array<ListNode | null>): Array<ListNode> {
  const nonNullLs: ListNode[] = ls.filter((l) => l !== null);
  for (let i = Math.floor(ls.length / 2) - 1; i >= 0; i--) {
    heapifyHelper(nonNullLs, i);
  }
  return nonNullLs;
}

function insert(ls: Array<ListNode>, l: ListNode | null | undefined) {
  if (!l) {
    return;
  }
  ls.push(l);
  let i = ls.length - 1;
  while (i > 0) {
    const parent = parentIndex(i);
    if (parent >= 0 && ls[i].val < ls[parent].val) {
      [ls[parent], ls[i]] = [ls[i], ls[parent]];
      i = parent;
    } else {
      break;
    }
  }
}

function remove(ls: Array<ListNode>): ListNode | null {
  if (ls.length === 0) {
    return null;
  }
  const ret = ls[0];
  const replace = ls.pop()!;
  if (ls.length !== 0) {
    ls[0] = replace;
    heapifyHelper(ls, 0);
  }
  return ret;
}

function mergeKListsHeapMerge(lists: Array<ListNode | null>): ListNode | null {
  const heap = heapify(lists);
  const head: ListNode = new ListNode();
  let current: ListNode = head;
  while (heap.length > 1) {
    const nextVal = remove(heap);
    current.next = nextVal;
    current = current.next!;
    insert(heap, nextVal?.next);
    current.next = null;
  }
  if (heap.length === 1) {
    current.next = heap.pop()!;
  }
  return head.next;
}

const heapMerge = "Heap Merge";
const testCases = [{
  testCase: "Ex 1",
  input: [[1], [3, 4], [1, 2]],
  expected: [1, 1, 2, 3, 4],
  testFns: [
    { impl: heapMerge, fn: mergeKListsHeapMerge },
  ],
}, {
  testCase: "Ex 2",
  input: [[1, 4, 5], [1, 3, 4], [2, 6]],
  expected: [1, 1, 2, 3, 4, 4, 5, 6],
  testFns: [
    { impl: heapMerge, fn: mergeKListsHeapMerge },
  ],
}, {
  testCase: "Ex 3",
  input: [],
  expected: [],
  testFns: [
    { impl: heapMerge, fn: mergeKListsHeapMerge },
  ],
}, {
  testCase: "Ex 4",
  input: [[]],
  expected: [],
  testFns: [
    { impl: heapMerge, fn: mergeKListsHeapMerge },
  ],
}, {
  testCase: "Ex 5",
  input: [[1, 4, 5], [1, 3, 4], [2, 6], [1, 3, 4, 5, 5, 6], [8, 9, 10]],
  expected: [1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 8, 9, 10],
  testFns: [
    { impl: heapMerge, fn: mergeKListsHeapMerge },
  ],
}];

testCases.forEach(({ testCase, input, expected, testFns }) => {
  testFns.forEach(({ impl, fn }) => {
    const inputLists = input.map(toList);
    Deno.test(`${testCase}, ${impl}`, () => {
      assertEquals(fromList(fn(inputLists)), expected);
    });
  });
});
