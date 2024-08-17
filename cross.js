
// function crosswordSolver(emptyPuzzle, words) {
//     const rows = emptyPuzzle.split('\n');
    
//     // Create a 2D array to represent the puzzle
//     const puzzle = rows.map(row => row.split(''));
    
//     // Create an array to store the positions of the words in the puzzle
//     const wordPositions = [];
    
//     // Loop through the puzzle and find the positions of the words
//     for (let i = 0; i < puzzle.length; i++) {
//       for (let j = 0; j < puzzle[i].length; j++) {
//         // Check if the current position is a number
//         if (puzzle[i][j] >= '1' && puzzle[i][j] <= '9') {
//           const wordLength = parseInt(puzzle[i][j]);
//           // Check if the position to the right is empty (horizontal placement)
//           if (j + 1 < puzzle[i].length && puzzle[i][j + 1] === '.') {
//             wordPositions.push({ length: wordLength, start: [i, j + 1], direction: 'horizontal' });
//           }
//           // Check if the position below is empty (vertical placement)
//           else if (i + 1 < puzzle.length && puzzle[i + 1][j] === '.') {
//             wordPositions.push({ length: wordLength, start: [i + 1, j], direction: 'vertical' });
//           }
//         }
//       }
//     }
    
//     // Sort the words by length in descending order
//     const sortedWords = words.sort((a, b) => b.length - a.length);
    
//     // Loop through the words and fill them in the puzzle
//     for (let i = 0; i < sortedWords.length; i++) {
//       const word = sortedWords[i];
//       const wordPosition = wordPositions.find(pos => pos.length === word.length);
      
//       if (!wordPosition) {
//         console.log('Error: Word cannot be placed in the puzzle');
//         return;
//       }
      
//       const { start, direction } = wordPosition;
//       const [row, col] = start;
      
//       // Fill in the word
//       for (let j = 0; j < word.length; j++) {
//         if (direction === 'horizontal') {
//           puzzle[row][col + j] = word[j];
//         } else if (direction === 'vertical') {
//           puzzle[row + j][col] = word[j];
//         }
//       }
      
//       // Remove this word position from the list to avoid reusing it
//       wordPositions.splice(wordPositions.indexOf(wordPosition), 1);
//     }
    
//     // Convert the puzzle back to a string and return it
//     const solvedPuzzle = puzzle.map(row => row.join('')).join('\n');
//     console.log(solvedPuzzle);
//     return solvedPuzzle;
// }

// // Test the function with the given arguments
// const puzzle = `...1...........
// ..1000001000...
// ...0....0......
// .1......0...1..
// .0....100000000
// 100000..0...0..
// .0.....1001000.
// .0.1....0.0....
// .10000000.0....
// .0.0......0....
// .0.0.....100...
// ...0......0....
// ..........0....`;

// const words = [
//     "sun",
//     "sunglasses",
//     "suncream",
//     "swimming",
//     "bikini",
//     "beach",
//     "icecream",
//     "tan",
//     "deckchair",
//     "sand",
//     "seaside",
//     "sandals",
// ];

// crosswordSolver(puzzle, words);
//=================================================================================
function crosswordSolver(puzzle, words) {
    const lines = puzzle.split('\n');
    const wordList = [...words]; // Copy of the words array

    function placeWord(line, word) {
        let charCount = 0;
        let startIndex = 0;
        
        for (let i = 0; i < line.length; i++) {
            if (line[i] === '.') continue;
            if (line[i] === '0' || line[i] === '1') {
                charCount++;
                if (charCount === 1) {
                    startIndex = i;
                }
            }
        }

        // Check if word fits in the line
        if (charCount !== word.length) return false;

        const newLine = line.split('');
        for (let i = 0; i < word.length; i++) {
            newLine[startIndex + i] = word[i];
        }
        
        return newLine.join('');
    }

    // Fill the puzzle
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('0') || lines[i].includes('1')) {
            const word = wordList.find(w => placeWord(lines[i], w));
            if (!word) {
                console.log('Error');
                return;
            }
            lines[i] = placeWord(lines[i], word);
            wordList.splice(wordList.indexOf(word), 1);
        }
    }

    // Verify if the puzzle is correctly filled
    const result = lines.join('\n');
    if (wordList.length !== 0 || result.includes('0') || result.includes('1')) {
        console.log('Error');
    } else {
        console.log(result);
    }
}

// Example usage
const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];

crosswordSolver(emptyPuzzle, words);
