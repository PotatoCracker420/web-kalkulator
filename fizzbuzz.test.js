// fizzbuzz.test.js
const fizzBuzz = require('./fizzbuzz');

test('fizzBuzz(1) skal returnere "1"', () => {
    expect(fizzBuzz(1)).toBe('1');
});

test('fizzBuzz(3) skal returnere "Fizz"', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
});

test('fizzBuzz(5) skal returnere "Buzz"', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
});

test('fizzBuzz(15) skal returnere "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});
