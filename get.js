function get(path,src) {
    return path.split("-").reduce(function (obj, key) {
    if (obj === undefined) {
        return undefined;
    }
    return obj[key];
},src);
}