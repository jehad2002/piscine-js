function filterEntries(obj, filter) {
    let res = {};
    for (let key in obj) {
        if (filter([key, obj[key]])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapEntries(entries, mapper) {
    let temp = {};
    for (let key in entries) {
        temp[key] = mapper([key, entries[key]]);
    }
    let res = {};
    for (let key in temp) {
        res[temp[key][0]] = temp[key][1];
    }
    return res;
}

function reduceEntries(entries, reducer, initialValue) {
    let acc = initialValue;
    for (let key in entries) {
        acc = reducer(acc, [key, entries[key]]);
    }
    return acc;
}
