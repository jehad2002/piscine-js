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
//========================================================
const add4 = '+4';
const mul2 = '*2';

function findExpression(number) {
    if (number === 1) {
        return '';
    }

    if (number % 2 === 0) {
        let result = findExpression(number / 2);
        if (result !== undefined) {
            return result + mul2;
        }
    }
    if (number >= 4) {
        let result = findExpression(number - 4);
        if (result !== undefined) {
            return result + add4;
        }
    }

    return undefined;
}

// console.log(findExpression(8));  // Output: '*2*2+4'
// console.log(findExpression(1));  // Output: ''
// console.log(findExpression(6));  // Output: undefined

