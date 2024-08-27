function filter(obj, pre) {
    let f = {};
    for (let key in obj) {
        if (pre(key)) {
            f[key] = obj[key];
        }
    }
    return f;
}

function map(obj, CB) {
    let map = {};
    for (let key in obj) {
        map[CB(key)] = obj[key];
    }
    return map;
}

function reduce(obj, CB, initialValue = '') {
    let acc = initialValue;
    for (let key in obj) {
        acc = CB(acc, key);
    }
    return acc;
}

// Example usage:
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

// // Adjusted example usage for filter, map, reduce
// console.log(filter(nutrients, (key) => /protein/.test(key)));
// // Output: { protein: 20 }

// console.log(map(nutrients, (key) => `-${key}`));
// // Output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduce(nutrients, (acc, key) => acc.concat(', ', key), '').slice(2));
// Output: carbohydrates, protein, fat
