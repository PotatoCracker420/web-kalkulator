// fizzbuzz.js
function fizzBuzz(n) {
    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n.toString();
}

module.exports = fizzBuzz;