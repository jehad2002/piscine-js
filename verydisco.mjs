// verydisco.mjs

// Function to transform a single word into a "very disco" style word
function transformWord(word) {
    const length = word.length;
    const halfLength = Math.ceil(length / 2);
    
    const firstHalf = word.slice(0, halfLength);
    const secondHalf = word.slice(halfLength);
    
    // Reverse the order of halves and concatenate them
    const transformedWord = secondHalf + firstHalf;
    
    return transformedWord;
}

// Process command line arguments
const args = process.argv.slice(2); // Get all arguments after "node" and script name
const input = args.join(' '); // Join all arguments into a single string

// Split the input into words
const words = input.split(' ');

// Transform each word and collect the result
const transformedWords = words.map(transformWord);

// Print the final result as a single line with spaces between the transformed words
console.log(transformedWords.join(' '));
