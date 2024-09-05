// import { readFile, writeFile, mkdir } from 'fs/promises';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { mkdirSync } from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const invitationsPath = join(__dirname, 'invitations.json');
// const vipListPath = join(__dirname, 'vip.txt');

// // Create directory if it doesn't exist
// try {
//   mkdirSync(__dirname, { recursive: true });
// } catch (err) {
//   console.error('Error creating directory:', err);
// }

// readFile(invitationsPath, 'utf8')
//   .then(data => {
//     const invitations = JSON.parse(data);
//     const vipGuests = invitations.filter(guest => guest.response === 'YES');
    
//     vipGuests.sort((a, b) => {
//       if (a.lastname < b.lastname) return -1;
//       if (a.lastname > b.lastname) return 1;
//       return 0;
//     });

//     const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}\n`);
//     return writeFile(vipListPath, formattedGuests.join(''), 'utf8');
//   })
//   .then(() => {
//     console.log('Success: VIP list saved to vip.txt.');
//   })
//   .catch(err => console.error('Error:', err));

import { readFile, writeFile } from 'fs/promises';  // Import file reading and writing methods
import { join } from 'path';  // Import the path module to handle file paths

const processGuests = async (dirPath) => {
  const invitationsPath = join(dirPath, 'invitations.json');  // Path to invitations.json
  const vipListPath = join(dirPath, 'vip.txt');  // Path to the output vip.txt file

  try {
    // Read the invitations JSON file
    const data = await readFile(invitationsPath, 'utf8');
    const invitations = JSON.parse(data);  // Parse the JSON file

    // Filter guests who answered 'YES'
    const vipGuests = invitations.filter(guest => guest.response === 'YES');

    // Sort guests by their last name in alphabetical order
    vipGuests.sort((a, b) => a.lastname.localeCompare(b.lastname));

    // Format guests as: Number. Lastname Firstname
    const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}\n`);

    // Write the formatted guests to vip.txt
    await writeFile(vipListPath, formattedGuests.join(''), 'utf8');

    console.log('VIP list has been successfully saved to vip.txt.');
  } catch (err) {
    console.error('Error:', err);
  }
};

// Usage example: replace 'your-directory-path' with the actual path where invitations.json is located
const dirPath = './your-directory-path';
processGuests(dirPath);
