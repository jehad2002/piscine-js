function ion(str) {
    const regEx = /(\w+)tion\b/g;
    const resReg = str.match(regEx);
    let res = [];

    if (resReg === null) {
        return res;
    }

    for (let i = 0; i < resReg.length; i++) {
        let baseWord = resReg[i].slice(0, -4); // Remove the "tion" part
        let modifiedStr = baseWord + 't';      // Add "t"
        res.push(modifiedStr);
    }

    return res;
}

// Example usage:
// const exampleStr = "attention, direction";
// const result = ion(exampleStr);
// console.log(result); // Output: [ 'attent', 'direct' ]
