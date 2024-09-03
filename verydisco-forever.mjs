// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')

// Data which will write in a file.
let data = "Hello world."

// Write data in 'Hello.txt' .
fs.writeFile('Hello.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
import fs from 'fs';
const transformWord = (word) => {
    const len = word.length;
    const halfLen = Math.ceil(len / 2);
    const firstHalf = word.slice(0, halfLen);
    const secondHalf = word.slice(halfLen);
    return secondHalf + firstHalf;
};

const main = () => {
    const argument = process.argv[2];

    if (!argument) {
        console.log("Please provide an argument.");
        return;
    }

    if (argument.includes(' ')) {
        const words = argument.split(' ');
        const transformedWords = words.map(transformWord);
        const resultSentence = transformedWords.join(' ');
        console.log(resultSentence);
    } else {
        const resultWord = transformWord(argument);
        console.log(resultWord);
    }
};

main();

// node --experimental-modules verydisco-forever.mjs "Node is awesome"
