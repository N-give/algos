import { assertEquals } from "@std/assert";

function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i] - 1;
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[target] &&
      i !== target
    ) {
      [nums[i], nums[target]] = [nums[target], nums[i]];
      target = nums[i] - 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}

const testCases = [{
  input: [1, 2, 0],
  expected: 3,
}, {
  input: [3, 4, -1, 1],
  expected: 2,
}, {
  input: [7, 8, 9, 11, 12],
  expected: 1,
}];

const testFns = [
  { impl: "swap position", fn: firstMissingPositive },
];

testCases.forEach(({ input, expected }, i) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`Ex ${i}, ${impl}`, () => {
      assertEquals(fn(input), expected);
    });
  });
});
