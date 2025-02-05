// let x = 4.9
// x = Math.round(x);
// console.log(x) Output: 5
//==================================

// let x = 4.9
// x = Math.floor(x);
// console.log(x) Output: 4
//=================================

// let x = 4.9
// x = Math.ceil(x);
// console.log(x) Output: 5
//================================

// let x = 4.9
// x = Math.trunc(x);
// console.log(x) Output: 4
//===============================

// let x = 4
// x = Math.pow(x, 2);
// console.log(x) Output: 16
//=================================

// let x = 3.14
// x = Math.sqrt(x);
// console.log(x) Output: 1.7
//=====================================

// let x = -3.14
// x = Math.abs(x);
// console.log(x) Output: 3.14                approx to 0 if x == -1 print 1i
//========================================

function round(int) {
    let neg = false;
    if (int < 0) {
        neg = true; //first
        int = -int; // secound
    } // if x == -1 give it 1 
    let counter = 0;
    while (!(int < 1 && int > -1)) {
        int -= 1;
        counter++;
    } //  if the x not between -1 and 1 
    if (int < 0.5) {
        if (neg) {
            return -counter; //return - for x
        } else {
            return counter; //return + for x
        }
    } else {
        if (neg) {
            return -counter - 1; // approx to down
        } else {
            return counter + 1; // approx to yp
        }
    }
}

function floor(int) {
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    let counter = 0;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter - 1;
    } else {
        return counter;
    }
}

function ceil(int) {
    if (!int) return 0; // if x == - return 0
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    let counter = 0;
    while (!(intCopy < 1 && intCopy >= 0)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    } else {
        return counter + 1;
    }
}

function trunc(int) {
    let counter = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    }
    return counter;
}