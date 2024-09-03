import { readFile } from 'fs/promises';

const transformWord = (word) => {
    const len = word.length;
    const halfLen = Math.ceil(len / 2);
    const firstHalf = word.slice(0, len - halfLen);
    const secondHalf = word.slice(len - halfLen);
    return secondHalf + firstHalf;
};

const reverseTransform = (word) => {
    const len = word.length;
    const halfLen = Math.floor(len / 2);
    const firstHalf = word.slice(-halfLen);
    const secondHalf = word.slice(0, len - halfLen);
    return firstHalf + secondHalf;
};

async function main() {
    const fileName = process.argv[2];

    if (!fileName) {
        console.log("Please provide the name of a file as an argument.");
        return;
    }

    try {
        const fileContent = await readFile(fileName, 'utf8');
        const words = fileContent.split(' ');
        const decipheredWords = words.map(reverseTransform);
        const result = decipheredWords.join(' ');
        console.log(result);
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}

main();
