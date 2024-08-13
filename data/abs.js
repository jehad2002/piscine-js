function isPositive(a) {
    if (a > 0) {
        return true;
    } else {
        return false;
    }
}

function abs(a) {
    if (isPositive(a) || a == 0) {
        return a;
    } else {
        return -a;
    }
}
console.log(isPositive(5));  // Output: true
console.log(isPositive(-3)); // Output: false
console.log(isPositive(0));  // Output: false
