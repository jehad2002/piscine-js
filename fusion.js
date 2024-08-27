function fusion(obj1, obj2) {
    var f = {};
    for (var key in obj1) {
        if (!obj1.hasOwnProperty(key)) continue;
        if (obj2.hasOwnProperty(key)) {
            if (is.obj(obj1[key]) && is.obj(obj2[key])) {
                f[key] = fusion(obj1[key], obj2[key]);
            } else if (is.arr(obj1[key]) && is.arr(obj2[key])) {
                f[key] = obj1[key].concat(obj2[key]);
            } else if (is.num(obj1[key]) && is.num(obj2[key])) {
                f[key] = obj1[key] + obj2[key];
            } else if (is.str(obj1[key]) && is.str(obj2[key])) {
                f[key] = obj1[key] + " " + obj2[key];
            } else {
                f[key] = obj2[key];
            }
        } else {
            f[key] = obj1[key];
        }
    }
    for (var key in obj2) {
        if (!obj2.hasOwnProperty(key)) continue;
        if (!obj1.hasOwnProperty(key)) {
            f[key] = obj2[key];
        }
    }
    return f;
}

const is = {};
is.num = (n) => typeof n === "number";
is.str = (n) => typeof n === "string";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";