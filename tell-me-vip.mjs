// import { readFile, writeFile } from 'fs/promises';
// import { join } from 'path';

// // Define the path to the guests.json file
// const filePath = join('.', 'guests.json');

// // Read and process the guest list
// async function processGuestList() {
//   try {
//     // Read the JSON file containing the guest list
//     const data = await readFile(filePath, 'utf-8');

//     // Parse the JSON data
//     const guests = JSON.parse(data);

//     // Filter out the guests who answered 'YES'
//     const vipGuests = guests
//       .filter(guest => guest.rsvp === 'YES')
//       .sort((a, b) => {
//         if (a.lastname < b.lastname) return -1;
//         if (a.lastname > b.lastname) return 1;
//         if (a.firstname < b.firstname) return -1;
//         if (a.firstname > b.firstname) return 1;
//         return 0;
//       });

//     // Format the guests as "Number. Lastname Firstname"
//     const formattedGuests = vipGuests.map((guest, index) => 
//       `${index + 1}. ${guest.lastname} ${guest.firstname}`
//     );

//     // Join the formatted guests into a string with each guest on a new line
//     const vipList = formattedGuests.join('\n');

//     // Write the formatted list to a vip.txt file
//     await writeFile('vip.txt', vipList, 'utf-8');
    
//     console.log('VIP list successfully saved to vip.txt');
//   } catch (error) {
//     console.error('Error processing guest list:', error);
//   }
// }

// // Call the function to process the guest list
// processGuestList();

//======================================================================

// import * as cp from 'child_process'
// import { mkdir, writeFile, readFile } from 'fs/promises'
// import { join, isAbsolute } from 'path'
// import { tmpdir } from 'os'
// import { promisify } from 'util'
// const exec = promisify(cp.exec)
// export const tests = []
// export const setup = async ({ path }) => {
//   const dir = `${tmpdir()}/tell-me-vip`
//   await mkdir(`${dir}/guests`, { recursive: true })
//   const createFilesIn = ({ files, dirPath }) =>
//     Promise.all(
//       files.map(([fileName, content]) =>
//         writeFile(`${dirPath}/${fileName}`, JSON.stringify(content)),
//       ),
//     )
//   const run = async cmd => {
//     const cmdPath = isAbsolute(cmd) ? cmd : join(dir, cmd)
//     const { stdout } = await exec(`node ${path} ${cmdPath}`)
//     const fileContent = await readFile(`vip.txt`, 'utf8')
//     return { data: fileContent }
//   }
//   return { tmpPath: dir, run, createFilesIn }
// }
// tests.push(async ({ randStr, eq, ctx }) => {
//   // test when no answers in the dir
//   const dirName = `guests-${randStr()}`
//   const dirPath = join(ctx.tmpPath, dirName)
//   await mkdir(dirPath)
//   const { data } = await ctx.run(dirName)
//   return eq('', data)
// })
// tests.push(async ({ randStr, eq, ctx }) => {
//   // test when no one said yes
//   const files = [
//     ['Ubaid_Ballard.json', { answer: 'no' }],
//     ['Victoria_Chan.json', { answer: 'no' }],
//     ['Dominika_Mullen.json', { answer: 'no' }],
//     ['Heath_Denton.json', { answer: 'no' }],
//     ['Lilith_Hamilton.json', { answer: 'no' }],
//   ]
//   const dirName = `guests-${randStr()}`
//   const dirPath = join(ctx.tmpPath, dirName)
//   await mkdir(dirPath)
//   await ctx.createFilesIn({ dirPath, files })
//   const { data } = await ctx.run(dirName)
//   return eq('', data)
// })
// tests.push(async ({ randStr, eq, ctx, upperFirst }) => {
//   const random = upperFirst(randStr())
//   const files = [
//     ['Ubaid_Ballard.json', { answer: 'yes' }],
//     ['Victoria_Chan.json', { answer: 'yes' }],
//     ['Dominika_Mullen.json', { answer: 'no' }],
//     ['Heath_Denton.json', { answer: 'no' }],
//     ['Lilith_Hamilton.json', { answer: 'yes' }],
//     [`${random}_Random.json`, { answer: 'yes' }],
//   ]
//   const dirName = `guests-${randStr()}`
//   const dirPath = join(ctx.tmpPath, dirName)
//   await mkdir(dirPath)
//   await ctx.createFilesIn({ dirPath, files })
//   const { data } = await ctx.run(dirName)
//   return eq(
//     [
//       `1. Ballard Ubaid`,
//       `2. Chan Victoria`,
//       `3. Hamilton Lilith`,
//       `4. Random ${random}`,
//     ],
//     data.split('\n'),
//   )
// })
// // test error when no arg?...
// Object.freeze(tests)

//====================================

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';

async function listVIPs(directoryPath) {
    try {
        // Read directory contents
        const files = await readdir(directoryPath);

        // Filter JSON files
        const jsonFiles = files.filter(file => extname(file) === '.json');

        // Map and filter guests who answered 'YES'
        const guestsPromises = jsonFiles.map(async (file) => {
            const filePath = join(directoryPath, file);
            const fileContent = await readFile(filePath, 'utf-8');
            const guest = JSON.parse(fileContent);

            // Check if the guest RSVP'd 'YES'
            if (guest.answer.toLowerCase() === 'yes') {
                const [firstname, lastname] = basename(file, '.json').split('_');
                return `${lastname} ${firstname}`;
            }
            return null;
        });

        // Wait for all promises and filter out null values
        const guests = (await Promise.all(guestsPromises)).filter(Boolean);

        // Sort guests alphabetically
        const sortedGuests = guests.sort();

        // Format guests list
        const formattedGuests = sortedGuests.map((name, index) => `${index + 1}. ${name}`).join('\n');

        // Write the VIP list to vip.txt
        await writeFile('vip.txt', formattedGuests, 'utf-8');

        return formattedGuests;
    } catch (error) {
        console.error('Error processing guests:', error);
        return '';
    }
}

// Main execution logic
async function main() {
    const args = process.argv.slice(2);
    const directoryPath = args[0] || '.';
    await listVIPs(directoryPath);
}

// Execute main function
main();
