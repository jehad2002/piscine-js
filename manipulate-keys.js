function filterKeys(obj, predicate) {
    return Object.keys(obj)
        .filter(predicate)
        .reduce((res, key) => {
            res[key] = obj[key];
            return res;
        }, {});
}

function mapKeys(obj, callback) {
    return Object.keys(obj)
        .map(callback)
        .reduce((res, key, i) => {
            res[key] = obj[Object.keys(obj)[i]];
            return res;
        }, {});
}

function reduceKeys(obj, callback, initialValue) {
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}
//====================== try========================

// function filterKeys(obj, predicate) {
//     let filtered = {};
//     for (let key in obj) {
//         if (predicate(key)) {
//             filtered[key] = obj[key];
//         }
//     }
//     return filtered;
// }

// Example usage
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
// console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
// Output: { protein: 20 }

// function mapKeys(obj, callback) {
//     let mapped = {};
//     for (let key in obj) {
//         mapped[callback(key)] = obj[key];
//     }
//     return mapped;
// }

// Example usage
// console.log(mapKeys(nutrients, (key) => `-${key}`));
// Output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// function reduceKeys(obj, callback, initialValue) {
//     let accumulator = initialValue;
//     for (let key in obj) {
//         accumulator = callback(accumulator, key);
//     }
//     return accumulator;
// }

// Example usage
// console.log(reduceKeys(nutrients, (acc, key) => acc.concat(', ', key), '').slice(2));
// Output: carbohydrates, protein, fat
