function words(string) {
    return string.split(" ");
}

function sentence(arr) {
    return arr.join(" ");
}

function yell(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return `*${string.toLowerCase()}*`;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(yell("hello world")); // Output: [ 'hello', 'world' ]
console.log(sentence(["hello", "world"])); // Output: "hello world"
console.log(words("hello world")); // Output: ["hello", "world"]
console.log(whisper("HELLO WORLD")); // Output: "*hello world*"
console.log(capitalize("hElLo WoRLd")); // Output: "Hello world"
