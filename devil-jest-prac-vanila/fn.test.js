const add = (a, b) => {
  return a + b;
};

test("1은 1이야", () => {
  expect(1).toBe(1);
});

test("1 더하기 2는 3이야", () => {
  expect(add(1, 2)).toBe(3);
});

test("1 더하기 2는 4이야", () => {
  expect(add(1, 2)).not.toBe(4);
});
