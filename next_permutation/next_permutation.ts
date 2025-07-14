import { assertEquals } from "@std/assert";

// Note: Do not return a new array, modify the array in place
function nextPermutation(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }
  if (nums.length === 2) {
    [nums[0], nums[1]] = [nums[1], nums[0]];
    return;
  }
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i < 0) {
    nums.sort((a, b) => a - b);
    return;
  }
  let j = nums.length - 1;
  while (j >= 0 && nums[i] >= nums[j]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  i++;
  const end = Math.floor((nums.length - i) / 2);
  for (let k = 0; k < end; k++) {
    [nums[i + k], nums[nums.length - 1 - k]] = [
      nums[nums.length - 1 - k],
      nums[i + k],
    ];
  }
}

const testCases = [{
  input: [1, 2, 3],
  expected: [1, 3, 2],
}, {
  input: [1, 3, 2],
  expected: [2, 1, 3],
}, {
  input: [2, 1, 3],
  expected: [2, 3, 1],
}, {
  input: [2, 3, 1],
  expected: [3, 1, 2],
}, {
  input: [3, 1, 2],
  expected: [3, 2, 1],
}, {
  input: [3, 2, 1],
  expected: [1, 2, 3],
}, {
  input: [1, 1, 5],
  expected: [1, 5, 1],
}, {
  input: [5, 1, 1],
  expected: [1, 1, 5],
}, {
  input: [1, 2, 3, 4, 5],
  expected: [1, 2, 3, 5, 4],
}, {
  input: [1, 2, 3, 5, 4],
  expected: [1, 2, 4, 3, 5],
}, {
  input: [1, 2, 3, 5, 4],
  expected: [1, 2, 4, 3, 5],
}, {
  input: [1, 2, 4, 3, 5],
  expected: [1, 2, 4, 5, 3],
}, {
  input: [1, 2, 4, 5, 3],
  expected: [1, 2, 5, 3, 4],
}, {
  input: [1, 2, 5, 3, 4],
  expected: [1, 2, 5, 4, 3],
}, {
  input: [1, 2, 5, 4, 3],
  expected: [1, 3, 2, 4, 5],
}, {
  input: [1, 3, 2, 4, 5],
  expected: [1, 3, 2, 5, 4],
}, {
  input: [1, 3, 2, 5, 4],
  expected: [1, 3, 4, 2, 5],
}, {
  input: [1, 3, 4, 2, 5],
  expected: [1, 3, 4, 5, 2],
}, {
  input: [1, 3, 4, 5, 2],
  expected: [1, 3, 5, 2, 4],
}, {
  input: [1, 3, 5, 2, 4],
  expected: [1, 3, 5, 4, 2],
}, {
  input: [1, 3, 5, 4, 2],
  expected: [1, 4, 2, 3, 5],
}, {
  input: [1, 4, 2, 3, 5],
  expected: [1, 4, 2, 5, 3],
}, {
  input: [1, 4, 2, 5, 3],
  expected: [1, 4, 3, 2, 5],
}, {
  input: [1, 4, 3, 2, 5],
  expected: [1, 4, 3, 5, 2],
}, {
  input: [1, 4, 3, 5, 2],
  expected: [1, 4, 5, 2, 3],
}, {
  input: [1, 4, 5, 2, 3],
  expected: [1, 4, 5, 3, 2],
}, {
  input: [1, 4, 5, 3, 2],
  expected: [1, 5, 2, 3, 4],
}, {
  input: [1, 5, 2, 3, 4],
  expected: [1, 5, 2, 4, 3],
}, {
  input: [1, 5, 2, 4, 3],
  expected: [1, 5, 3, 2, 4],
}];

const testFns = [
  { impl: "Next Permutation", fn: nextPermutation },
];

testCases.forEach(({ input, expected }, i) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`Ex ${i}, ${impl}`, () => {
      fn(input);
      assertEquals(input, expected);
    });
  });
});
