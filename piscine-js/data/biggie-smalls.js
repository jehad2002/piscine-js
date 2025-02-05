const smalls = Number.NEGATIVE_INFINITY;
const biggie = Number.POSITIVE_INFINITY;
console.log(smalls < -1000000);  // Output: true
console.log(biggie > 1000000);   // Output: true

console.log(1 / smalls);         // Output: 0 (since dividing 1 by negative infinity gives 0)
console.log(1 / biggie);         // Output: 0 (since dividing 1 by positive infinity gives 0)
