import { readFile } from 'fs/promises';

// Function to reverse the transformation applied by the verydisco function
const reverseTransform = (word) => {
  const len = word.length;
  const halfLen = Math.floor(len / 2);  // Use Math.floor to determine the split point
  const firstHalf = word.slice(-halfLen);  // Last halfLen characters
  const secondHalf = word.slice(0, len - halfLen);  // Remaining characters from the start
  return firstHalf + secondHalf;
};

// Main function to read the file, decipher it, and print the result
async function main() {
  const fileName = process.argv[2];  // Get the file name from the command line arguments

  if (!fileName) {
    console.log("Please provide the name of a file as an argument.");
    return;
  }

  try {
    const fileContent = await readFile(fileName, 'utf8');  // Read the content of the file
    const words = fileContent.split(' ');  // Split the content into words
    const decipheredWords = words.map(reverseTransform);  // Reverse transform each word
    const result = decipheredWords.join(' ');  // Join the deciphered words into a string
    console.log(result);  // Print the result to the console
  } catch (err) {
    console.error('Error reading the file:', err);  // Handle any errors during file read
  }
}

main();  // Execute the main function
