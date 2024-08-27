function filterKeys(obj, pre) {
    let f = {};
    for (let key in obj) {
        if (pre(key)) {
            f[key] = obj[key];
        }
    }
    return f;
}

// // Example usage
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
// console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
// // Output: { protein: 20 }

function mapKeys(obj, CB) {
    let map = {};
    for (let key in obj) {
        map[CB(key)] = obj[key];
    }
    return map;
}

// // Example usage
// console.log(mapKeys(nutrients, (key) => `-${key}`));
// // Output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

function reduceKeys(obj, CB, initialValue) {
    let acc = initialValue;
    for (let key in obj) {
        acc = CB(acc, key);
    }
    return acc;
}

// // Example usage
// console.log(reduceKeys(nutrients, (acc, key) => acc.concat(', ', key), '').slice(2));
// // Output: carbohydrates, protein, fat
