function letterSpaceNumber(inputStr) {
let arr = inputStr.match(/[a-z] [0-9][?][a-z0-9]/gi);
return arr !== null ?arr : [];
}