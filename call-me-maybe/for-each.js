function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}



//===========================flow================================


//=============================curr=========================

// function currify(fn) {
//     return function currified(...args) {
//         return args.length >= fn.length
//             ? fn(...args)
//             : currified.bind(null, ...args);
//     };
// }