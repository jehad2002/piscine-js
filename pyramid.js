function pyramid(char,num) {
    let str = "";
let space = " ".repeat(char.length);
for(var i = 1; i<=num; i++) {
str = str + space.repeat(num - 1) + char.repeat(2 * i - 1) + "\n"
}
return str.slice(0,-1)

}