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