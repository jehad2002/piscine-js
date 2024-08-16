// function findExpression(num) {
//     for (let i = 0; i < 1000000; i++) {
//         let copy = 1;
//         let s = "1";
//         while (copy !== num) {
//             if (copy < num) {
//                 if (Math.random() < 0.5) {
//                     copy += 4;
//                     s += " +4";
//                 } else {
//                     copy *= 2;
//                     s += " *2";
//                 }
//             } else {
//                 break;
//             }
//         }
//         if (copy === num) {
//             return s;
//         }
//     }
//     return undefined;
// }

// console.log(findExpression(8)); // Output: "1 *2 *2 +4"

function findExpression(num) {
    for (let i = 0; i < 1000000; i++) {
        let copy = 1;
        let s = "1";
        while (copy !== num) {
            if (copy < num) {
                if (Math.random() < 0.5) {
                    copy += 4;
                    s += " add4";
                } else {
                    copy *= 2;
                    s += " mul2";
                }
            } else {
                break;
            }
        }
        if (copy === num) {
            return s;
        }
    }
    return undefined;
}

console.log(findExpression(8)); // Output: "1 mul2 mul2 add4"
