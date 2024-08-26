// Function to pick specified keys from an object
function pick(obj, keys) {
    const obj2 = {};
    Object.keys(obj).forEach(key => {
        if (keys.includes(key)) {
            obj2[key] = obj[key];
        }
    });
    return obj2;
}

// Function to omit specified keys from an object
function omit(obj, keys) {
    const obj2 = {};
    Object.keys(obj).forEach(key => {
        if (!keys.includes(key)) {
            obj2[key] = obj[key];
        }
    });
    return obj2;
}

// // Example usage:
// const originalObject = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// };

// const pickedObject = pick(originalObject, ['a', 'c']);
// const omittedObject = omit(originalObject, ['b', 'd']);

// console.log('Picked Object:', pickedObject);  // { a: 1, c: 3 }
// console.log('Omitted Object:', omittedObject); // { a: 1, c: 3 }
