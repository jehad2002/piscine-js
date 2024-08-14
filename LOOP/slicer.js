function slice(input, start, end) {
    if (end === undefined) {
        end = input.length;
    }
    let res;
    if (start < 0) {
        start = input.length + start;
    }
    if (end < 0) {
        end = input.length + end;
    }
    if (typeof input === "string") {
        res = "";
        for (let i = start; i < end; i++) {
            res += input[i];
        }
    }
    if (Array.isArray(input)) {
        res = [];
        for (let i = start; i < end; i++) {
            res.push(input[i]);
        }
    }
    return res;
 }
// // Example 1: Slicing a string
// let str = "Hello, World!";
// console.log(slice(str, 0, 5)); // Output: "Hello"
// console.log(slice(str, -6));   // Output: "World!"

// // Example 2: Slicing an array
// let arr = [1, 2, 3, 4, 5];
// console.log(slice(arr, 1, 3));  // Output: [2, 3]
// console.log(slice(arr, -3));    // Output: [3, 4, 5]

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2)); //Output [ 'camel', 'duck', 'elephant' ]