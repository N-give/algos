import { assertEquals } from "@std/assert";

function median(ns: number[]): number {
  if (ns.length % 2 === 0) {
    const mid2 = Math.floor(ns.length / 2);
    const mid1 = mid2 - 1;
    return (ns[mid1] + ns[mid2]) / 2;
  }
  return ns[Math.floor(ns.length / 2)];
}

function findMedianSortedArraysMergeArrays(
  nums1: number[],
  nums2: number[],
): number {
  const merged = new Array(nums1.length + nums2.length);
  let i1 = 0;
  let i2 = 0;
  // while (i1 < nums1.length || i2 < nums2.length) {
  for (let i = 0; i < merged.length; i++) {
    if (i1 >= nums1.length) {
      merged[i] = nums2[i2++];
      continue;
    }
    if (i2 >= nums2.length) {
      merged[i] = nums1[i1++];
      continue;
    }

    if (nums1[i1] <= nums2[i2]) {
      merged[i] = nums1[i1++];
    } else if (nums2[i2] < nums1[i1]) {
      merged[i] = nums2[i2++];
    }
  }
  return median(merged);
}

function findMedianSortedArraysWalkArray(
  nums1: number[],
  nums2: number[],
): number {
  if (nums1.length === 0) {
    return median(nums2);
  }
  if (nums2.length === 0) {
    return median(nums1);
  }
  let n1l = 0;
  let n1r = nums1.length - 1;
  let n2l = 0;
  let n2r = nums2.length - 1;
  let l = (nums1[n1l] <= nums2[n2l]) ? nums1[n1l] : nums2[n2l];
  let r = (nums1[n1r] >= nums2[n2r]) ? nums1[n1r] : nums2[n2r];

  const total = nums1.length + nums2.length;
  const m = Math.floor(total / 2) + (total % 2);

  for (let i = 0; i < m; i++) {
    // move low
    if (n1l >= nums1.length) {
      l = nums2[n2l++];
    } else if (n2l >= nums2.length) {
      l = nums1[n1l++];
    } else if (nums1[n1l] < nums2[n2l]) {
      l = nums1[n1l++];
    } else {
      l = nums2[n2l++];
    }

    // move right
    if (n1r < 0) {
      r = nums2[n2r--];
    } else if (n2r < 0) {
      r = nums1[n1r--];
    } else if (nums1[n1r] > nums2[n2r]) {
      r = nums1[n1r--];
    } else {
      r = nums2[n2r--];
    }
  }

  return median([l, r]);
}

const testCases = [{
  testCase: "Ex 1",
  input: [[1, 3], [2]],
  expected: 2,
}, {
  testCase: "Ex 2",
  input: [[1, 2], [3, 4]],
  expected: 2.5,
}, {
  testCase: "Ex 3",
  input: [[1, 2, 3, 4, 5], [3, 4]],
  expected: 3,
}, {
  testCase: "Ex 4",
  input: [[2], []],
  expected: 2,
}, {
  testCase: "Ex 5",
  input: [[2, 2, 2, 2], [2, 2, 2]],
  expected: 2,
}, {
  testCase: "Ex 6",
  input: [[1, 2], [3, 4, 5, 6, 7]],
  expected: 4,
}, {
  testCase: "Ex 7",
  input: [[1, 2, 3, 4, 5], [6, 7]],
  expected: 4,
}, {
  testCase: "Ex 8",
  input: [[1, 2], [3, 4, 5, 6, 7, 8]],
  expected: 4.5,
}, {
  testCase: "Ex 9",
  input: [[1, 2, 3, 4, 5], [6, 7, 8]],
  expected: 4.5,
}];

const testFns = [
  { impl: "Merge Arrays", fn: findMedianSortedArraysMergeArrays },
  { impl: "Walk Arrays", fn: findMedianSortedArraysWalkArray },
];

testCases.forEach(({ testCase, input, expected }) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`${testCase}, ${impl}`, () => {
      assertEquals(fn(input[0], input[1]), expected);
    });
  });
});
