import { assertEquals } from "@std/assert";

function maxAreaBruteForce(height: number[]): number {
  let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

function maxAreaEndPointers(height: number[]): number {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    maxArea = Math.max(maxArea, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
}

const testCases = [{
  testName: "Ex 1, Brute Force",
  input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
  expected: 49,
  testFn: maxAreaBruteForce,
}, {
  testName: "Ex 2, Brute Force",
  input: [1, 1],
  expected: 1,
  testFn: maxAreaBruteForce,
}, {
  testName: "Ex 1, End Pointers",
  input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
  expected: 49,
  testFn: maxAreaEndPointers,
}, {
  testName: "Ex 2, End Pointers",
  input: [1, 1],
  expected: 1,
  testFn: maxAreaEndPointers,
}];

testCases.forEach(({ testName, input, expected, testFn }) => {
  Deno.test(testName, () => {
    assertEquals(testFn(input), expected);
  });
});
