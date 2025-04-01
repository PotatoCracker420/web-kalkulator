export function fakultet(tall) {
    if (tall < 0) {
        return -1; // Factorial is not defined for negative numbers
    } else if (tall === 0) {
        return 1; // The factorial of 0 is 1
    } else {
        let result = 1;
        for (let i = 1; i <= tall; i++) {
            result *= i;
        }
        return result;
    }
}
