function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    if (depth === 0) {
        return arr.slice();
    }
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
    }, []);
}

// console.log(flat([1, [2, [3, [4, 5]]]], 2)); Output: [ 1, 2, 3, [ 4, 5 ] ]


