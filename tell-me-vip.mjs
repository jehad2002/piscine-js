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
            if (guest.rsvp === 'YES') {
                const [firstname, lastname] = basename(file, '.json').split('_');
                return `${lastname} ${firstname}`;
            }
            return null;
        });

        // Wait for all promises and filter out null values (i.e., those who did not RSVP 'YES')
        const guests = (await Promise.all(guestsPromises)).filter(Boolean);

        // Sort guests alphabetically
        const sortedGuests = guests.sort();

        // Format guests list
        const formattedGuests = sortedGuests.map((name, index) => `${index + 1}. ${name}`).join('\n');

        // Define the path for the vip.txt file
        const vipFilePath = join(directoryPath, 'vip.txt');

        // Write the VIP list to vip.txt
        // If no guests RSVP'd 'YES', the file will be empty but still created
        await writeFile(vipFilePath, formattedGuests, 'utf-8');

        // Log the result to console (for testing purposes)
        console.log(formattedGuests);

        // Return the data for testing
        return formattedGuests;
    } catch (error) {
        console.error('Error processing guests:', error);
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
