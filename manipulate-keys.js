function filterKeys(obj, predicate) {
    let f = {};
    for (let key in obj) {
        if (predicate(key)) {
            f[key] = obj[key];
        }
    }
    return f;
}


function map(obj, CB) {
    let res = {};
    for (let key in obj) {
        res[key] = CB(obj[key]);
    }
    return res;
}

function reduce(obj, CB, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in obj) {
        acc = CB(acc, obj[key]);
    }
    return acc;
}