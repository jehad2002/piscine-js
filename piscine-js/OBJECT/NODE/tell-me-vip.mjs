// import { promises as fs } from 'fs';
// import { join } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = join(__filename, '..');

// async function filterVIPGuests() {
//   try {
//     const inputFilePath = join(__dirname, 'guests.json');
//     const outputFilePath = join(__dirname, 'vip.txt');
    
//     const guestsData = await fs.readFile(inputFilePath, 'utf8');
//     const guests = JSON.parse(guestsData);
    
//     const vipGuests = guests.filter(guest => guest.answer === 'YES');
    
//     vipGuests.sort((a, b) => {
//       if (a.lastname === b.lastname) {
//         return a.firstname.localeCompare(b.firstname);
//       }
//       return a.lastname.localeCompare(b.lastname);
//     });
    
//     const formattedGuests = vipGuests.map((guest, index) => 
//       `${index + 1}. ${guest.lastname} ${guest.firstname}`
//     ).join('\n');
    
//     await fs.writeFile(outputFilePath, formattedGuests, 'utf8');
    
//     console.log('VIP list saved to vip.txt');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// filterVIPGuests();

//=====================================================

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
