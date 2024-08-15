function chunk(arr, size) {
    if (size <= 0) {
        return [];
    }

    var res = [];
    for (var i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
// console.log(chunk([1, 2, 3, 4, 5], 2));  // Output: [[1, 2], [3, 4], [5]]
// console.log(chunk([1, 2, 3, 4, 5], 3));  // Output: [[1, 2, 3], [4, 5]]
// console.log(chunk([1, 2, 3, 4, 5], 1));  // Output: [[1], [2], [3], [4], [5]]
// console.log(chunk([1, 2, 3, 4, 5], 0));  // Output: []
// console.log(chunk([1, 2, 3, 4, 5], -1)); // Output: []