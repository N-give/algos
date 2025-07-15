import { assertArrayIncludes, assertEquals } from "@std/assert";

function dfs(
  candidates: number[],
  target: number,
  i: number,
  cs: number[][],
  current: number[],
) {
  if (target === 0) {
    cs.push([...current]);
    return;
  }
  if (i >= candidates.length || target < candidates[i]) {
    return;
  }
  dfs(candidates, target, i + 1, cs, current);
  current.push(candidates[i]);
  dfs(candidates, target - candidates[i], i, cs, current);
  current.pop();
}

function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const current: number[] = [];
  const cs: number[][] = [];
  dfs(candidates, target, 0, cs, current);
  return cs;
}

const testCases = [{
  input: [2, 3, 6, 7],
  target: 7,
  expected: [[2, 2, 3], [7]],
}, {
  input: [2, 3, 5],
  target: 8,
  expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]],
}, {
  input: [2],
  target: 1,
  expected: [],
}];

const testFns = [
  { impl: "Recursive DFS", fn: combinationSum },
];

testCases.forEach(({ input, target, expected }, i) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`Ex ${i}, ${impl}`, () => {
      const actual = fn(input, target);
      assertEquals(actual.length, expected.length);
      assertArrayIncludes(actual, expected);
    });
  });
});
