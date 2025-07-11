import { assertEquals } from "@std/assert";

function convertButeForce(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const m = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    m[i] = [];
  }

  let d = 1;
  let row = 0;
  for (const c of s) {
    m[row].push(c);
    row = row + d;
    if (row === numRows) {
      d = -d;
      row = row + 2 * d;
    }
    if (row < 0) {
      d = -d;
      row = row + 2 * d;
    }
  }

  return m.map((r) => r.join("")).join("");
}

function convertStrIndex(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const res = new Array(s.length);
  const step = (numRows * 2) - 2 || 1;

  for (let i = 0; i < s.length; i += step) {
    res.push(s.charAt(i));
  }

  for (let r = 1; r < numRows - 1; r++) {
    for (let i = 0; i < s.length + r + 1; i += step) {
      const il = i - r;
      const ir = i + r;
      if (il > 0) {
        res.push(s.charAt(il));
      }
      if (ir < s.length) {
        res.push(s.charAt(ir));
      }
    }
  }

  for (let i = numRows - 1; i < s.length; i += step) {
    if (i > 0 && i < s.length) {
      res.push(s.charAt(i));
    }
  }

  return res.join("");
}

const testCases = [{
  testName: "Ex 1, Brute Force",
  nRows: 3,
  inputStr: "PAYPALISHIRING",
  expected: "PAHNAPLSIIGYIR",
  testFn: convertButeForce,
}, {
  testName: "Ex 1, String Indexing",
  nRows: 3,
  inputStr: "PAYPALISHIRING",
  expected: "PAHNAPLSIIGYIR",
  testFn: convertStrIndex,
}, {
  testName: "Ex 2, Brute Force",
  nRows: 4,
  inputStr: "PAYPALISHIRING",
  expected: "PINALSIGYAHRPI",
  testFn: convertButeForce,
}, {
  testName: "Ex 2, String Indexing",
  nRows: 4,
  inputStr: "PAYPALISHIRING",
  expected: "PINALSIGYAHRPI",
  testFn: convertStrIndex,
}, {
  testName: "Ex 3, Brute Force",
  nRows: 1,
  inputStr: "A",
  expected: "A",
  testFn: convertButeForce,
}, {
  testName: "Ex 3, String Indexing",
  nRows: 1,
  inputStr: "A",
  expected: "A",
  testFn: convertStrIndex,
}, {
  testName: "Ex 4, Brute Force",
  nRows: 1,
  inputStr: "AB",
  expected: "AB",
  testFn: convertButeForce,
}, {
  testName: "Ex 4, String Indexing",
  nRows: 1,
  inputStr: "AB",
  expected: "AB",
  testFn: convertStrIndex,
}, {
  testName: "Ex 5, Brute Force",
  nRows: 3,
  inputStr: "ABCD",
  expected: "ABDC",
  testFn: convertButeForce,
}, {
  testName: "Ex 5, String Indexing",
  nRows: 3,
  inputStr: "ABCD",
  expected: "ABDC",
  testFn: convertStrIndex,
}];

testCases.forEach(({ testName, nRows, inputStr, expected, testFn }) => {
  Deno.test(testName, () => {
    assertEquals(testFn(inputStr, nRows), expected);
  });
});
