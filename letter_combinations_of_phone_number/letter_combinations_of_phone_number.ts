import { assertEquals } from "@std/assert";

const letters = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

function dfs(digits: string, i: number, cs: string[], current: string[]) {
  if (i >= digits.length) {
    cs.push(current.join(""));
    return;
  }
  const digitLetters = letters[Number(digits[i])];
  for (const c of digitLetters) {
    current.push(c);
    dfs(digits, i + 1, cs, current);
    current.pop();
  }
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const combinations: string[] = [];
  const currentCombination: string[] = [];

  dfs(digits, 0, combinations, currentCombination);

  return combinations;
}

const testCases = [{
  input: "23",
  expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
}, {
  input: "",
  expected: [],
}, {
  input: "2",
  expected: ["a", "b", "c"],
}];

testCases.forEach(({ input, expected }, i) => {
  Deno.test(`Test ${i}`, () => {
    assertEquals(letterCombinations(input), expected);
  });
});
