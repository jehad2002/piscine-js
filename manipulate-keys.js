function filter(obj, CB) {
    let res = {};
    for (let key in obj) {
        if (CB(obj[key])) {
            res[key] = obj[key];
        }
    }
    return res;
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