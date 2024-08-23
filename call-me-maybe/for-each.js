function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}
//=====================sweet========================

// function mult2(x) {
//     return (y) => x * y;
// }

// function add3(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         };
//     };
// }

// function sub4(x) {
//     return function (y) {
//         return function (z) {
//             return function (w) {
//                 return x - y - z - w;
//             };
//         };
//     };
// }
//================================city==================================

// function hasCity(country, cities) {
//     return function (city) {
//         if (cities.indexOf(city) === -1) {
//             return city + " is not a city from " + country;
//         }
//         return city + " is a city from " + country;
//     };
// }
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