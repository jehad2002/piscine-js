function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}



//===========================flow================================

// function flow(arr) {
//     return function (...args) {
//         if (args.length > 1) {
//             args = [arr[0](...args)];
//         }
//         return arr.reduce((acc, fn) => fn(acc), args[0]);
//     };
// }
//=============================curr=========================

// function currify(fn) {
//     return function currified(...args) {
//         return args.length >= fn.length
//             ? fn(...args)
//             : currified.bind(null, ...args);
//     };
// }