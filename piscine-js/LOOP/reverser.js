function reverse(input) {
    if (typeof input === "string") {
        let res = "";
        for (let i = input.length - 1; i >= 0; i--) {
            res += input[i];
        }
        return res;
    } else if (Array.isArray(input)) {
        let res = [];
        for (let i = input.length - 1; i >= 0; i--) {
            res.push(input[i]);
        }
        return res;
    }
}

//==========================================================================================
// function reverse(input) {
//     let isString = typeof input === 'string';  // Check if the input is a string
//     let arr = isString ? input.split('') : input;  // Convert string to array if necessary
    
//     // Initialize pointers
//     let left = 0;
//     let right = arr.length - 1;
    
//     // Swap elements from both ends towards the center
//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
    
//     // If input was a string, return the reversed string
//     return isString ? arr.join('') : arr;
// }

// // Testing the function
// console.log(reverse([1, 2, 3, 4]));  // [4, 3, 2, 1]
// console.log(reverse('hello'));       // 'olleh'
