import { assertEquals } from "@std/assert";

function strStr(haystack: string, needle: string): number {
  for (let hi = 0; hi < haystack.length; hi++) {
    if (haystack.charAt(hi) !== needle.charAt(0)) {
      continue;
    }

    let ni;
    for (ni = 0; ni < needle.length; ni++) {
      if (haystack.charAt(hi + ni) !== needle.charAt(ni)) {
        break;
      }
    }

    if (ni === needle.length) {
      return hi;
    }
  }

  return -1;
}

const testCases = [{
  testName: "Example 1",
  inputHaystack: "sadbutsad",
  inputNeedle: "sad",
  expected: 0,
  testFn: strStr,
}, {
  testName: "Example 2",
  inputHaystack: "leetcode",
  inputNeedle: "leeto",
  expected: -1,
  testFn: strStr,
}, {
  testName: "Example 2",
  inputHaystack: "mississippi",
  inputNeedle: "issip",
  expected: 4,
  testFn: strStr,
}];

testCases.forEach(
  ({ testName, inputHaystack, inputNeedle, expected, testFn }) => {
    Deno.test(
      testName,
      () => assertEquals(testFn(inputHaystack, inputNeedle), expected),
    );
  },
);
