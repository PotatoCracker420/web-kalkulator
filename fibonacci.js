// fibonacci.js

export function fibonacci(n) {
    if (n <= 2) {
        return 1; // Basistilfeller
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Rekursiv beregning
}
