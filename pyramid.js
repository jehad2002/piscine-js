function pyramid(char, num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
        let space = " ".repeat(num - i);       
        let chars = char.repeat(2 * i - 1); 
        str += space + chars + "\n";           
    }
    return str.slice(0, -1);                   
}

// console.log(pyramid('*', 5));
// Output: 
//     *
//    ***
//   *****
//  *******
// *********

