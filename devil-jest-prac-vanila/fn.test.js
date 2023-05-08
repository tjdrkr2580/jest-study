const fn = {
  add: (a, b) => {
    return a + b;
  },
  object: {
    name: "김태현",
    age: 20,
  },
};

test("테스트", () => {
  expect(fn.object).toEqual({
    name: "김태현",
    age: 20,
  });
});

test("테스트", () => {
  expect(fn.object).toStrictEqual({
    name: "김태현",
    age: 20,
  });
});

test("true?", () => {
  expect("").toBeFalsy();
});
