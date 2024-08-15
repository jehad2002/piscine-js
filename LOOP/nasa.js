function nasa(int) {
    var res = "";
    for (var i = 1; i <= int; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res = res + "NASA";
        } else if (i % 3 === 0) {
            res = res + "NA";
        } else if (i % 5 === 0) {
            res = res + "SA";
        } else {
            res = res + i.toString();
        }
        if (i !== int) {
            res = res + " ";
        }
    }
    return res;
}
//console.log(nasa(15));  // Outputs: "1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA"
