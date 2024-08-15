function get(src, path) {
    if (typeof path !== 'string') {
        throw new TypeError('Path must be a string');
    }
    return path.split("-").reduce(function (obj, key) {
        if (obj === undefined) {
            return undefined;
        }
        return obj[key];
    }, src);
}

// Example test
// try {
//     const result = get({ key: 'value' }, 'key');
//     console.log(result === 'value'); // Should log: true
// } catch (error) {
//     console.error(error.message);
// }
