// Fibonacci funksjon
function fibonacci(n) {
    if (n > 5) {
        return "Maks 5 er tillatt";
    }
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}