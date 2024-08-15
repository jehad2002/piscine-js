// function flat(arr, depth) {
//     if (!Array.isArray(arr)) {
//         return arr;
//     }
//     if (depth === 0) {
//         return arr;
//     }
//     if (depth === undefined) {
//         depth = 1;
//     }
//     return arr.reduce((acc, cur) => {
//         return acc.concat(flat(cur, depth - 1));
//     }, []);
// }
//==========================================================================

function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    if (depth === 0) {
        return arr.slice(); // Return a shallow copy of the array if depth is 0
    }
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
    }, []);
}

// console.log(flat([1, [2, [3, [4, 5]]]], 2)); Output: [ 1, 2, 3, [ 4, 5 ] ]


