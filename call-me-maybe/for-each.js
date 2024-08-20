function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}
//==================================Filtter==========================

// function filter(arr, fn) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// function reject(arr, fn) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (!fn(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// function partition(arr, fn) {
//     return [filter(arr, fn), reject(arr, fn)];
// }
//======================reduce=======================================

// function fold(arr, f, acc) {
//     for (var i = 0; i < arr.length; i++) {
//         acc = f(acc, arr[i], i, arr);
//     }
//     return acc;
// }

// function foldRight(arr, f, acc) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         acc = f(acc, arr[i], i, arr);
//     }
//     return acc;
// }

// function reduce(arr, f) {
//     let acc = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         acc = f(acc, arr[i], i, arr);
//     }
//     return acc;
// }

// function reduceRight(arr, f) {
//     let acc = arr[arr.length - 1];
//     for (var i = arr.length - 2; i >= 0; i--) {
//         acc = f(acc, arr[i], i, arr);
//     }
//     return acc;
// }

//===============quanfiltters===========================

// function every(array, test) {
//     for (var i = 0; i < array.length; i++) {
//         if (!test(array[i])) return false;
//     }
//     return true;
// }

// function some(array, test) {
//     for (var i = 0; i < array.length; i++) {
//         if (test(array[i])) return true;
//     }
//     return false;
// }

// function none(array, test) {
//     return !some(array, test);
// }
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