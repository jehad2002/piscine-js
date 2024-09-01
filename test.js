
//======================================

// async function all(objs = {}) {
//     var res = {};
//     if (Object.keys(objs).length === 0) return {};
//     for (let key in objs) {
//         res[key] = await objs[key];
//     }
//     return res;
// }
//================================

async function series(arr) {
    var result = [];
    for (const item of arr) {
        result.push(await item());
    }
    return result;
}