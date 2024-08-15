function get(path,src) {
    if (typeof path !== 'string') {
        throw new TypeError('Path must be a string');
    }
    return path.split("-").reduce(function (obj, key) {
    if (obj === undefined) {
        return undefined;
    }
    return obj[key];
},src);
}