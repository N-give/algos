import { assertEquals } from "@std/assert";

function longestValidParentheses(s: string): number {
  const dp = new Array(s.length + 1).fill(0);
  let maxValid = 0;
  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== ")") {
      continue;
    }

    if (s[i - 2] === "(") {
      dp[i] = dp[i - 2] + 2;
    } else {
      const j = i - dp[i - 1] - 1;
      if (j > 0 && s[j - 1] === "(") {
        dp[i] = dp[i - 1] + 2 + dp[j - 1];
      }
    }
    maxValid = Math.max(maxValid, dp[i]);
  }
  return maxValid;
}

const testCases = [{
  input: "()",
  output: 2,
}, {
  input: "()()",
  output: 4,
}, {
  input: "()(()",
  output: 2,
}, {
  input: "()(())",
  output: 6,
}, {
  input: "())()",
  output: 2,
}, {
  input: "(())",
  output: 4,
}, {
  input: "(()",
  output: 2,
}, {
  input: ")()())",
  output: 4,
}, {
  input: "",
  output: 0,
}, {
  input: "(((",
  output: 0,
}, {
  input: ")))",
  output: 0,
}];

const testFns = [
  { impl: "", fn: longestValidParentheses },
];

testCases.forEach(({ input, output }, i) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`Ex ${i}, ${impl}`, () => {
      assertEquals(fn(input), output);
    });
  });
});
