import { writeFile } from 'fs/promises';

// Function to transform a word by swapping its halves
const transformWord = (word) => {
  const len = word.length;
  const halfLen = Math.ceil(len / 2);
  const firstHalf = word.slice(0, halfLen);
  const secondHalf = word.slice(halfLen);
  return secondHalf + firstHalf;
};

// Function to handle the main logic of transforming and writing the result
async function main() {
  const argument = process.argv[2];  // Get the argument passed from the command line

  if (!argument) {
    console.log("Please provide an argument.");
    return;
  }

  let result;

  if (argument.includes(' ')) {
    const words = argument.split(' ');  // Split the sentence into words
    const transformedWords = words.map(transformWord);  // Transform each word
    result = transformedWords.join(' ');  // Join the transformed words back into a sentence
  } else {
    result = transformWord(argument);  // Transform the single word
  }

  try {
    await writeFile('verydisco-forever.txt', result);  // Write the result to the file
    console.log('Result written to verydisco-forever.txt');
  } catch (err) {
    console.error('Error writing to file:', err);  // Handle any errors during file write
  }
}

main();  // Execute the main function


// node --experimental-modules verydisco-forever.mjs "Node is awesome"
