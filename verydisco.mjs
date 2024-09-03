// function transformWord(word) {
//     const length = word.length;
//     const halfLength = Math.ceil(length / 2);
    
//     const firstHalf = word.slice(0, halfLength);
//     const secondHalf = word.slice(halfLength);
    
//     const transformedWord = secondHalf + firstHalf;
    
//     return transformedWord;
// }
// const args = process.argv.slice(2); 
// const input = args.join(' '); 

// const words = input.split(' ');

// words.forEach(word => {
//     const transformed = transformWord(word);
//     console.log(transformed);
// });
//==================================

// import fs from 'fs/promises'
// const readFile = fs.readFile
// const writeFile = fs.writeFile
// import { promisify } from 'util'
// import * as cp from 'child_process'

// const exec = promisify(cp.exec)

// export const tests = []
// const name = 'verydisco-reverso'
// const hasContentAndExpect = async ({ content, expect, path, eq }) => {
//   const cwd = `${path
//     .split('/')
//     .slice(0, -1)
//     .join('/')}/`

//   await writeFile(`${cwd}${name}.txt`, content, 'utf8')
//   const { stdout } = await exec(`node ${name}.mjs "${name}.txt"`, { cwd })
//   await exec(`rm ${name}.txt`, { cwd })

//   return eq(stdout.trim(), expect)
// }

// tests.push(async ({ path, eq }) =>
//   hasContentAndExpect({
//     path,
//     eq,
//     content: `deNo si omeawes`,
//     expect: 'Node is awesome',
//   }),
// )

// // tests.push(async ({ path, eq }) => {
// //   await hasContentAndExpect({
// //     path,
// //     eq,
// //     content: // newfilename,
// //     expect: // reverso
// //   })
// // })

// Object.freeze(tests)
//===================================

// #!/usr/bin/env node

// const args = process.argv.slice(2); 

// if (args.length === 0) {
//   console.log("Please provide an argument.");
//   process.exit(1);
// }

// const veryDisco = (input) => {
//   return input.split(' ').map(word => {
//     const halfLength = Math.ceil(word.length / 2);
//     const firstHalf = word.slice(0, halfLength);
//     const secondHalf = word.slice(halfLength);
//     return secondHalf + firstHalf;
//   }).join(' ');
// };

// const input = args.join(' ');
// const result = veryDisco(input);
// console.log(result);
//=========================

// verydisco.mjs

// Function to transform a single word into "very disco" style
const transformWord = (word) => {
    const len = word.length;
    const halfLen = Math.ceil(len / 2);
    const firstHalf = word.slice(0, halfLen);
    const secondHalf = word.slice(halfLen);
    return secondHalf + firstHalf;
};

// Main function to process command line arguments
const main = () => {
    // Get the first argument passed after the program name
    const argument = process.argv[2];

    if (!argument) {
        console.log("Please provide an argument.");
        return;
    }

    // If the argument contains spaces, treat each part as a word
    if (argument.includes(' ')) {
        const words = argument.split(' ');
        const transformedWords = words.map(transformWord);
        const resultSentence = transformedWords.join(' ');
        console.log(resultSentence);
    } else {
        // If it's a single word, transform it directly
        const resultWord = transformWord(argument);
        console.log(resultWord);
    }
};

// Call the main function to start the process
main();
