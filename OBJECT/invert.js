function invert(obj) {
let obj2 = {}
let keys = Object.keys(obj)
keys.forEach(key => {
    let val = obj[key]
    obj2[val] = key
});
return obj2
}
//===============example========================
// let originalObject = {
//     'a': 1,
//     'b': 2,
//     'c': 3
// };

// let invertedObject = invert(originalObject);
// console.log('Original Object:', originalObject);
// console.log('Inverted Object:', invertedObject);