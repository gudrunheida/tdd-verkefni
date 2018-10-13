const add = require('./calc');


it('Should return zero on an empty string', () => {
    expect(add("")).toBe(0);
});

it('Should return when only one number is in the string', () => {
    expect(add("5")).toBe(5);
});

it('Should return sum of two numbers', () => {
    expect(add("2,4")).toBe(6);
});
it('Should return sumerize multiple numbers', () => {
    expect(add("2,4,3,1")).toBe(10);
});

it("should be able to throw an error and print out a negative number", () => {
    expect(add('2,-8,-9')).toBe("Negative numbers not allowed: -8 -9");
});