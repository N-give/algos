import { assertEquals } from "@std/assert";

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let left = 0;
  let right = nums.length;
  let mid = Math.floor((right - left) / 2);

  do {
    if (nums[mid] === target) {
      left = 0;
      right = mid;
      mid = Math.floor((right - left) / 2);
    }
    while (left < right && nums[mid] !== target) {
      if (nums[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((right - left) / 2) + left;
    }
  } while (left < right && mid > 0 && nums[mid - 1] >= target);
  if (nums[mid] !== target) {
    return [-1, -1];
  }
  const leftMost = mid;

  left = mid;
  right = nums.length;
  mid = Math.floor((right - left) / 2) + left;

  do {
    if (nums[mid] === target) {
      left = mid;
      right = nums.length;
      mid = Math.floor((right - left) / 2) + left;
    }
    while (left < right && nums[mid] !== target) {
      if (nums[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((right - left) / 2) + left;
    }
  } while (left < right && mid < nums.length - 1 && nums[mid + 1] <= target);
  const rightMost = mid;

  return [leftMost, rightMost];
}

const testCases = [{
  input: [5, 7, 7, 8, 8, 10],
  target: 8,
  expected: [3, 4],
}, {
  input: [5, 7, 7, 8, 8, 10],
  target: 6,
  expected: [-1, -1],
}, {
  input: [],
  target: 0,
  expected: [-1, -1],
}, {
  input: [6],
  target: 6,
  expected: [0, 0],
}, {
  input: [1, 2, 3, 4],
  target: 6,
  expected: [-1, -1],
}, {
  input: [7, 8, 9, 10],
  target: 6,
  expected: [-1, -1],
}, {
  input: [5, 7, 7, 8, 8, 10],
  target: 5,
  expected: [0, 0],
}, {
  input: [5, 7, 7, 8, 8, 10],
  target: 10,
  expected: [5, 5],
}, {
  input: [5, 7, 7, 8, 8, 10],
  target: 11,
  expected: [-1, -1],
}, {
  input: [5, 7, 7, 8, 8, 10],
  target: 4,
  expected: [-1, -1],
}];

const testFns = [
  { impl: "Divide and search", fn: searchRange },
];

testCases.forEach(({ input, target, expected }, i) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`Ex ${i}, ${impl}`, () => {
      assertEquals(fn(input, target), expected);
    });
  });
});
