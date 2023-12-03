const reverseString = require('./reverseString');

test("reverseSting function exists", () => {
    expect(reverseString).toBeDefined();
});

test("String reverses",() => {
    expect(reverseString("hEllo")).toEqual("olleh");
});