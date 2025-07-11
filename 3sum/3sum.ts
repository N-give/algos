import { assertEquals } from "@std/assert";

function threeSumBruteForce(nums: number[]): number[][] {
  const res: Set<string> = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 2; k < nums.length; k++) {
      for (let j = i + 1; j < k; j++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const s = JSON.stringify([nums[i], nums[j], nums[k]].sort());
          res.add(s);
        }
      }
    }
  }
  return [...res].map((s) => JSON.parse(s));
}

function threeSumTwoSumPlus(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
  }
  return res;
}

const bruteForce = "Brute Force";
const twoSumPlus = "Two Sum Plus";
const testCases = [{
  testName: "Ex 1",
  input: [-1, 0, 1, 2, -1, -4],
  expected: [[-1, -1, 2], [-1, 0, 1]],
  testFns: [
    { implementation: bruteForce, fn: threeSumBruteForce },
    { implementation: twoSumPlus, fn: threeSumTwoSumPlus },
  ],
}, {
  testName: "Ex 2",
  input: [0, 1, 1],
  expected: [],
  testFns: [
    { implementation: bruteForce, fn: threeSumBruteForce },
    { implementation: twoSumPlus, fn: threeSumTwoSumPlus },
  ],
}, {
  testName: "Ex 3",
  input: [0, 0, 0],
  expected: [[0, 0, 0]],
  testFns: [
    { implementation: bruteForce, fn: threeSumBruteForce },
    { implementation: twoSumPlus, fn: threeSumTwoSumPlus },
  ],
}, {
  testName: "Ex 4",
  input: [0, 0, 0, 0],
  expected: [[0, 0, 0]],
  testFns: [
    { implementation: bruteForce, fn: threeSumBruteForce },
    { implementation: twoSumPlus, fn: threeSumTwoSumPlus },
  ],
}, {
  testName: "Ex 5",
  input: [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10],
  expected: [
    [-10, 5, 5],
    [-5, 0, 5],
    [-4, 2, 2],
    [-3, -2, 5],
    [-3, 1, 2],
    [-2, 0, 2],
  ],
  testFns: [
    { implementation: bruteForce, fn: threeSumBruteForce },
    { implementation: twoSumPlus, fn: threeSumTwoSumPlus },
  ],
}];

testCases.forEach(({ testName, input, expected, testFns }) => {
  testFns.forEach(({ implementation, fn }) => {
    Deno.test(`${testName}, ${implementation}`, () => {
      expected = expected.map((vs) => vs.sort()).sort();
      const actual = fn(input).map((vs) => vs.sort()).sort();
      assertEquals(actual, expected);
    });
  });
});
