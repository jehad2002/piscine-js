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

import { readFile, writeFile, access, mkdir } from 'fs/promises';
import { join } from 'path';

// Helper function to check if the file exists
async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Main function to process the guest list
async function processGuestList(dir) {
  const guestFilePath = join(dir, 'guests.json');
  const vipFilePath = join(dir, 'vip.txt');

  // Ensure the directory exists
  await mkdir(dir, { recursive: true });

  // Check if the guests.json file exists
  const guestFileAvailable = await fileExists(guestFilePath);

  if (!guestFileAvailable) {
    // If guests.json doesn't exist, create an empty vip.txt
    await writeFile(vipFilePath, '', 'utf-8');
    return '';
  }

  try {
    // Read the guests.json file
    const data = await readFile(guestFilePath, 'utf-8');
    const guests = JSON.parse(data);

    // Filter guests who answered 'YES'
    const vipGuests = guests
      .filter(guest => guest.rsvp === 'YES')
      .sort((a, b) => {
        if (a.lastname < b.lastname) return -1;
        if (a.lastname > b.lastname) return 1;
        if (a.firstname < b.firstname) return -1;
        if (a.firstname > b.firstname) return 1;
        return 0;
      });

    // Format the guests as "Number. Lastname Firstname"
    const formattedGuests = vipGuests.map((guest, index) => 
      `${index + 1}. ${guest.lastname} ${guest.firstname}`
    );

    // Join the formatted guests into a single string
    const vipList = formattedGuests.join('\n');

    // Write the formatted guest list to vip.txt
    await writeFile(vipFilePath, vipList, 'utf-8');

    // Return the formatted guest list as a string
    return vipList;
  } catch (error) {
    console.error('Error processing guest list:', error);
    throw error;
  }
}

// Export the function for external usage
export { processGuestList };
