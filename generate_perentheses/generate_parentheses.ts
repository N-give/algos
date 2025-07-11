import { assertEquals } from "@std/assert";

function generateParenthesis(n: number): string[] {
  const memo = new Map();
  memo.set(1, new Set(["()"]));
  return [...helper(n, memo)].sort();
}

function helper(n: number, memo: Map<number, Set<string>>): Set<string> {
  const earlyReturn = memo.get(n);
  if (earlyReturn) {
    return earlyReturn;
  }
  const ret: Set<string> = new Set();

  const sub = helper(n - 1, memo);
  memo.set(n - 1, sub);
  sub.forEach((v) => ret.add("(" + v + ")"));
  for (let i = 1; i < n; i++) {
    const subn = helper(i, memo);
    const subn1 = helper(n - i, memo);
    subn.forEach((sn) => {
      subn1.forEach((sn1) => {
        ret.add(sn + sn1);
        ret.add(sn1 + sn);
      });
    });
  }
  return ret;
}

const testCases = [{
  testName: "Ex 1, Recursive",
  input: 3,
  expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
  testFn: generateParenthesis,
}, {
  testName: "Ex 2, Recursive",
  input: 1,
  expected: ["()"],
  testFn: generateParenthesis,
}, {
  testName: "Ex 3, Recursive",
  input: 4,
  expected: [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()",
  ],
  testFn: generateParenthesis,
}];

testCases.forEach(({ testName, input, expected, testFn }) => {
  Deno.test(testName, () => {
    assertEquals(testFn(input).sort(), expected.sort());
  });
});
