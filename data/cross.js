// /**
//  * This function takes an empty crossword puzzle and a list of words to fill in the puzzle and returns a string with the puzzle string filled with the list of words instead of numbers in the form of a square matrix.
//  * 
//  * @param {string} emptyPuzzle - The empty puzzle string with the following rules: each character will be either a number, a . or a \n; a number represents the number of words starting from the specific position, either 1, 2 the 0 represents letter of the word from the second letter and a . represents a space that does not need to be filled.
//  * @param {Array} words - The list of words to fill in the puzzle.
//  * 
//  * @returns {string} - The solved crossword puzzle string.
//  */
//  function crosswordSolver(emptyPuzzle, words) {
//     const rows = emptyPuzzle.split('\n');
    
//     // Create a 2D array to represent the puzzle
//     const puzzle = rows.map(row => row.split(''));
    
//     // Create a dictionary to store the positions of the words in the puzzle
//     const wordPositions = {};
    
//     // Loop through the puzzle and find the positions of the words
//     for (let i = 0; i < puzzle.length; i++) {
//       for (let j = 0; j < puzzle[i].length; j++) {
//         // Check if the current position is a number
//         if (puzzle[i][j] === '1' || puzzle[i][j] === '2') {
//           // Check if the position to the right is empty
//           if (j + 1 < puzzle[i].length && puzzle[i][j + 1] === '.') {
//             // Store the position of the word
//             const wordLength = parseInt(puzzle[i][j]);
//             const wordPosition = [i, j + 1];
//             wordPositions[wordLength] = wordPosition;
//           }
//           // Check if the position below is empty
//           else if (i + 1 < puzzle.length && puzzle[i + 1][j] === '.') {
//             // Store the position of the word
//             const wordLength = parseInt(puzzle[i][j]);
//             const wordPosition = [i + 1, j];
//             wordPositions[wordLength] = wordPosition;
//           }
//           // If neither position is empty, return an error
//           else {
//             console.log('Error');
//             return;
//           }
//         }
//       }
//     }
    
//     // Check if the number of words in the list matches the number of words in the puzzle
//     if (Object.keys(wordPositions).length !== words.length) {
//       console.log('Error');
//       return;
//     }
    
//     // Sort the words by length in descending order
//     const sortedWords = words.sort((a, b) => b.length - a.length);
    
//     // Loop through the words and fill them in the puzzle
//     for (let i = 0; i < sortedWords.length; i++) {
//       const word = sortedWords[i];
//       const wordLength = word.length;
//       const wordPosition = wordPositions[wordLength];
//       const row = wordPosition[0];
//       const col = wordPosition[1];
//       const isHorizontal = puzzle[row][col - 1] === '.';
      
//       // Check if the word fits in the puzzle
//       if ((isHorizontal && col + wordLength > puzzle[row].length) || (!isHorizontal && row + wordLength > puzzle.length)) {
//         console.log('Error');
//         return;
//       }
      
//       // Fill in the word
//       for (let j = 0; j < wordLength; j++) {
//         if (isHorizontal) {
//           puzzle[row][col + j] = word[j];
//         } else {
//           puzzle[row + j][col] = word[j];
//         }
//       }
//     }
    
//     // Convert the puzzle back to a string and return it
//     const solvedPuzzle = puzzle.map(row => row.join('')).join('\n');
//     console.log(solvedPuzzle);
//     return solvedPuzzle;
//   }
  
//   // Test the function with the given arguments
//   const puzzle = `...1...........
//   ..1000001000...
//   ...0....0......
//   .1......0...1..
//   .0....100000000
//   100000..0...0..
//   .0.....1001000.
//   .0.1....0.0....
//   .10000000.0....
//   .0.0......0....
//   .0.0.....100...
//   ...0......0....
//   ..........0....`;
//   const words = [
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
//   ];
//   crosswordSolver(puzzle, words); // Output: ...s...........
//                                   //         ..sunglasses...
//                                   //         ...n....u......
//                                   //         .s......n...s..
//                                   //         .w....deckchair
//                                   //         bikini..r...n..
//                                   //         .m.....seaside.
//                                   //         .m.b....a.a....
//                                   //         .icecream.n....
//                                   //         .n.a......d....
//                                   //         .g.c.....tan...
//                                   //         ...h......l....
//                                   //         ..........s....

//===================================================================================================================================================


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

// import java.util.*;

// public class CrosswordSolver {
//     /**
//      * This function takes a crossword grid and a list of words and returns the solved crossword.
//      *
//      * @param grid 2D character array representing the crossword grid
//      * @param words List of words to be placed in the crossword grid
//      * @return 2D character array representing the solved crossword grid
//      */
//     public static char[][] solveCrossword(char[][] grid, List<String> words) {
//         // Initialize variables
//         int n = grid.length;
//         int m = grid[0].length;
//         int[] wordLengths = new int[words.size()];
//         boolean[] used = new boolean[words.size()];
//         for (int i = 0; i < words.size(); i++) {
//             wordLengths[i] = words.get(i).length();
//         }

//         // Sort the words by length in descending order
//         Arrays.sort(wordLengths);
//         Collections.reverse(Arrays.asList(wordLengths));

//         // Recursively solve the crossword
//         if (solve(grid, words, wordLengths, used, 0, 0, n, m)) {
//             return grid;
//         } else {
//             return null;
//         }
//     }

//     /**
//      * This function recursively solves the crossword by placing words in the grid.
//      *
//      * @param grid        2D character array representing the crossword grid
//      * @param words       List of words to be placed in the crossword grid
//      * @param wordLengths Array of word lengths sorted in descending order
//      * @param used        Array of booleans indicating whether a word has been used
//      * @param i           Current row index
//      * @param j           Current column index
//      * @param n           Number of rows in the grid
//      * @param m           Number of columns in the grid
//      * @return True if the crossword is solved, false otherwise
//      */
//     public static boolean solve(char[][] grid, List<String> words, int[] wordLengths, boolean[] used, int i, int j, int n, int m) {
//         // Base case: if we have reached the end of the grid, the crossword is solved
//         if (i == n) {
//             return true;
//         }

//         // Check if the current cell is empty
//         if (grid[i][j] == '-') {
//             // Try to place a word horizontally
//             for (int k = 0; k < words.size(); k++) {
//                 if (!used[k] && wordLengths[k] == m - j) {
//                     // Check if the word fits in the grid
//                     boolean fits = true;
//                     for (int l = 0; l < wordLengths[k]; l++) {
//                         if (grid[i][j + l] != '-' && grid[i][j + l] != words.get(k).charAt(l)) {
//                             fits = false;
//                             break;
//                         }
//                     }
//                     if (fits) {
//                         // Place the word in the grid
//                         used[k] = true;
//                         for (int l = 0; l < wordLengths[k]; l++) {
//                             grid[i][j + l] = words.get(k).charAt(l);
//                         }
//                         // Recursively solve the rest of the grid
//                         if (solve(grid, words, wordLengths, used, i, j + wordLengths[k], n, m)) {
//                             return true;
//                         }
//                         // Remove the word from the grid
//                         used[k] = false;
//                         for (int l = 0; l < wordLengths[k]; l++) {
//                             grid[i][j + l] = '-';
//                         }
//                     }
//                 }
//             }

//             // Try to place a word vertically
//             for (int k = 0; k < words.size(); k++) {
//                 if (!used[k] && wordLengths[k] == n - i) {
//                     // Check if the word fits in the grid
//                     boolean fits = true;
//                     for (int l = 0; l < wordLengths[k]; l++) {
//                         if (grid[i + l][j] != '-' && grid[i + l][j] != words.get(k).charAt(l)) {
//                             fits = false;
//                             break;
//                         }
//                     }
//                     if (fits) {
//                         // Place the word in the grid
//                         used[k] = true;
//                         for (int l = 0; l < wordLengths[k]; l++) {
//                             grid[i + l][j] = words.get(k).charAt(l);
//                         }
//                         // Recursively solve the rest of the grid
//                         if (solve(grid, words, wordLengths, used, i + wordLengths[k], j, n, m)) {
//                             return true;
//                         }
//                         // Remove the word from the grid
//                         used[k] = false;
//                         for (int l = 0; l < wordLengths[k]; l++) {
//                             grid[i + l][j] = '-';
//                         }
//                     }
//                 }
//             }
//         } else {
//             // Move to the next cell
//             if (j == m - 1) {
//                 if (solve(grid, words, wordLengths, used, i + 1, 0, n, m)) {
//                     return true;
//                 }
//             } else {
//                 if (solve(grid, words, wordLengths, used, i, j + 1, n, m)) {
//                     return true;
//                 }
//             }
//         }

//         // If no word fits in the current cell, backtrack
//         return false;
//     }

//     public static void main(String[] args) {
//         // Read input
//         Scanner sc = new Scanner(System.in);
//         char[][] grid = new char[10][10];
//         for (int i = 0; i < 10; i++) {
//             grid[i] = sc.next().toCharArray();
//         }
//         String[] wordsArray = sc.next().split(";");
//         List<String> words = new ArrayList<>();
//         for (String word : wordsArray) {
//             words.add(word);
//         }

//         // Solve the crossword
//         char[][] solution = solveCrossword(grid, words);

//         // Print the solution
//         for (int i = 0; i < 10; i++) {
//             for (int j = 0; j < 10; j++) {
//                 System.out.print(solution[i][j]);
//             }
//             System.out.println();
//         }
//     }
// }