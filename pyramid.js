function pyramid(char, num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
        let space = " ".repeat(num - i);       // Calculate leading spaces
        let chars = char.repeat(2 * i - 1);    // Calculate the number of characters
        str += space + chars + "\n";           // Construct the line and add a newline
    }
    return str;
}

// console.log(pyramid('*', 5));'
// Output: 
//     *
//    ***
//   *****
//  *******
// *********

