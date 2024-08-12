function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join(""); 
}

function setToArr(set) {
    return [...set];
}

function setToStr(set) {
    return [...set].join(""); 
}

function strToArr(str) {
    return [...str]; 
}

function strToSet(str) {
    return new Set(str); 
}

function mapToObj(map) {
    return Object.fromEntries(map); 
}

function objToMap(obj) {
    return new Map(Object.entries(obj)); 
}

function objToArr(obj) {
    return Object.values(obj); 
}

function arrToObj(arr) {
    return {...arr}; 
}

function strToObj(str) {
    return {...str}; 
}

function superTypeOf(value) {
    return Array.isArray(value) ? "Array"
        : value instanceof Set ? "Set"
        : value instanceof Map ? "Map"
        : value === null ? "null"
        : typeof value; 
}