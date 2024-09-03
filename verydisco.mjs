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

import fs from 'fs/promises'
const readFile = fs.readFile
const writeFile = fs.writeFile
import { promisify } from 'util'
import * as cp from 'child_process'

const exec = promisify(cp.exec)

export const tests = []
const name = 'verydisco-reverso'
const hasContentAndExpect = async ({ content, expect, path, eq }) => {
  const cwd = `${path
    .split('/')
    .slice(0, -1)
    .join('/')}/`

  await writeFile(`${cwd}${name}.txt`, content, 'utf8')
  const { stdout } = await exec(`node ${name}.mjs "${name}.txt"`, { cwd })
  await exec(`rm ${name}.txt`, { cwd })

  return eq(stdout.trim(), expect)
}

tests.push(async ({ path, eq }) =>
  hasContentAndExpect({
    path,
    eq,
    content: `deNo si omeawes`,
    expect: 'Node is awesome',
  }),
)

// tests.push(async ({ path, eq }) => {
//   await hasContentAndExpect({
//     path,
//     eq,
//     content: // newfilename,
//     expect: // reverso
//   })
// })

Object.freeze(tests)