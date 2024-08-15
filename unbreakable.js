function join(arr, x) {
    if (x === null) {
        x = ",";
    }
    var result = arr[0].toString();
    for (var i = 1; i < arr.length; i++) {
        result += x + arr[i];
    }
    return result;
}

function split(str, x) {
    if (x === null) {
        x = ",";
    }
    var result = [];
    if (x === "") {
        for (var i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    var end = str.indexOf(x);
    while (end > -1) {
        end = str.indexOf(x);
        if (end === -1) {
            break;
        }
        result.push(str.slice(0, end));
        str = str.slice(end + x.length);
    }
    result.push(str);
    return result;
}
// var numbers = [1, 2, 3, 4];
// var joinedNumbers = join(numbers, null);
// console.log(joinedNumbers);  Output: "1,2,3,4"
//================================================

// var str1 = "10,20,30,40";
// var splitNumbers = split(str1);
// console.log(splitNumbers);  Output: ["10", "20", "30", "40"]
//===============================================================

// const str = 'hello jehad'

// const arr0 = str.split() // Output: ['hello jehad']

// const arr1 = str.split(' ') //Output: ['hello', 'jehad']

// comst arr2 = str.split('') //Output: ['h','e','l','l','o','j','e','h','a','d']

// const arr3 = str.split('o') //Output: ['hellj','ehad']