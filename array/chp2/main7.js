// Recursion data structure

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

function sumToN(n) {
    if (n <= 0) {
        return 0
    }
    return n + sumToN(n - 1)
}

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(factorial(5))     // 120
console.log(sumToN(10))       // 55
console.log(fibonacci(6))     // 8