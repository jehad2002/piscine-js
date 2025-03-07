is.num = (n) => typeof n === "number";
is.nan = (n) => Number.isNaN(n);
is.str = (n) => typeof n === "string";
is.bool = (n) => typeof n === "boolean";
is.undef = (n) => n === undefined;
is.def = (n) => !is.undef(n);
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";
is.truthy = (n) => !!n;
is.falsy = (n) => !n;
console.log(is.num(42));    // Output: true
console.log(is.num("42"));  // Output: false
