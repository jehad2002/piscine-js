function cutFirst(str) {
    return str.slice(2)
}
// console.log(cutFirst("Hello, World!"));  Output: "llo, World!"
// console.log(cutFirst("JavaScript"));     Output: "vaScript"

function cutLast(str) {
    return str.slice(0, -2)
}
// console.log(cutLast("Hello, World!"));  Output: "Hello, World"
// console.log(cutLast("JavaScript"));     Output: "JavaScrip"

function cutFirstLast(str) {
    return str.slice(2, -2)
}
// console.log(cutFirstLast("Hello, World!"));  Output: "llo, World"
// console.log(cutFirstLast("JavaScript"));     Output: "vaScrip"
function keepFirst(str) {
    return str.slice(2)
}
// console.log(keepFirst("hello")) Output: llo

function keepLast(str) {
    return str.slice(-2)
}
// console.log(keepLast("Hello, World!"));  Output: "! "
// console.log(keepLast("JavaScript"));     Output: "pt"
// console.log(keepLast("A"));              Output: "A" (string is shorter than 2 characters)
// console.log(keepLast("Go"));             Output: "Go"

function keepFirstLast(str) {
    return str.slice(0, 2) + str.slice(-2)
}
// console.log(keepFirstLast("Hello, World!"));  Output: "He!d!"
// console.log(keepFirstLast("JavaScript"));     Output: "Jaipt"
// console.log(keepFirstLast("A"));              Output: "A" (not enough characters for both slices, so it returns the first character only)
// console.log(keepFirstLast("Go"));             Output: "Go" (string is exactly two characters long)
//===============================================
// let num1 = 10
// let num2 = 20
// if (num2 > num1) {
//     console.log(right)
// }
//=================================== 

// let role = prompt('What is your role?');

// if (role == 'admin') {
//     document.write('update', 'create', 'delete');
// } else if (role == 'manager') {
//     document.write('update', 'remove');
// } else {
//     document.write('hello user');
// }
//=======================================
