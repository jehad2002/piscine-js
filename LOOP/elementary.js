function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    } else if (b < 0) {
        return -multiply(a, -b);
    } else {
        return a + multiply(a, b - 1);
    }
}
function divide(a, b) {
    if (b === 0) {
        return Infinity; 
    }

    let negative = false;
    if (a < 0) {
        a = -a;
        negative = !negative;
    }
    if (b < 0) {
        b = -b;
        negative = !negative;
    }

    let count = 0;
    while (a >= b) {
        a -= b;
        count++;
    }

    return negative ? -count : count;
}
function modulo(num, divisor) {
    return num - multiply(divisor, divide(num, divisor));
}
// console.log(multiply(4, 3)); // Output: 12
// console.log(multiply(-4, 3)); // Output: -12
// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, -2)); // Output: -5
// console.log(modulo(10, 3)); // Output: 1
// console.log(modulo(10, -3)); // Output: 1