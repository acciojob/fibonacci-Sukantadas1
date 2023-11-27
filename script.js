function fibonacci(num) {
    if (num <= 0) {
        return "Invalid input. Please provide a positive integer.";
    }

    if (num === 1) {
        return 0;
    }

    let first = 0;
    let second = 1;

    for (let i = 2; i < num; i++) {
        let next = first + second;
        first = second;
        second = next;
    }

    return second;
}

module.exports = fibonacci;
