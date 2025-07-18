import { assertEquals } from "@std/assert";

function fn(value: type) {
}

const testCases = [{
  input: [],
  expected: [],
}];

const testFns = [{
  impl: "FnName",
  fn: fn,
}];

testCases.forEach(({ input, expected }, i) => {
  testFns.forEach(({ impl, fn }) => {
    Deno.test(`Test ${i}, ${impl}`, () => {
      assertEquals(fn(input), expected);
    });
  });
});
