// function flat(arr, depth = 1) {
//     if (!Array.isArray(arr)) {
//         return arr;
//     }
//     if (depth === 0) {
//         return arr.slice();
//     }
//     return arr.reduce((acc, cur) => {
//         return acc.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
//     }, []);
// }

// console.log(flat([1, [2, [3, [4, 5]]]], 2)); Output: [ 1, 2, 3, [ 4, 5 ] ]


const arr = [1, 2, [3, 4, [5, 6]]];

function alta(arr, d = 1) {
   return d > 0 
     ? arr.reduce((acc, val) => 
         acc.concat(Array.isArray(val) ? alta(val, d - 1) : val), [])
     : arr.slice();
};

const flattenedArr = alta(arr, Infinity);
console.log(flattenedArr); // [1, 2, 3, 4, 5, 6]
