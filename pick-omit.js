// Function to pick specified keys from an object
function pick(obj, keys) {
    const obj2 = {};

    // Ensure keys is an array, even if a single key is passed
    keys = Array.isArray(keys) ? keys : [keys];

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

    // Ensure keys is an array, even if a single key is passed
    keys = Array.isArray(keys) ? keys : [keys];

    Object.keys(obj).forEach(key => {
        if (!keys.includes(key)) {
            obj2[key] = obj[key];
        }
    });

    return obj2;
}

// // Example usage:
// const user = {
//     age: 32,
//     ageVerified: false,
//     name: 'John Doe'
// };

// const newUser = {
//     ageVerified: false
// };

// // Testing the pick function with a single key
// const pickedObject = pick(user, 'ageVerified');
// console.log('Picked Object:', pickedObject); // { ageVerified: false }

// // Testing the omit function with a single key
// const omittedObject = omit(user, 'age');
// console.log('Omitted Object:', omittedObject); // { ageVerified: false, name: 'John Doe' }
