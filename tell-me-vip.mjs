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

//==================================
import fs from 'fs';
import path from 'path';

// Define the path to the JSON file and the output text file
const jsonFilePath = path.join(__dirname, 'guests.json');
const outputFilePath = path.join(__dirname, 'vip.txt');

// Read and parse the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  let guests;
  try {
    guests = JSON.parse(data);
  } catch (parseError) {
    console.error('Error parsing the JSON file:', parseError);
    return;
  }

  // Filter the guests who answered "YES"
  const vipGuests = guests.filter(guest => guest.response === 'YES');

  // Sort guests alphabetically by Lastname then Firstname
  vipGuests.sort((a, b) => {
    if (a.lastname !== b.lastname) {
      return a.lastname.localeCompare(b.lastname);
    }
    return a.firstname.localeCompare(b.firstname);
  });

  // Format the list
  const formattedList = vipGuests.map((guest, index) => 
    `${index + 1}. ${guest.lastname} ${guest.firstname}`
  ).join('\n');

  // Write the formatted list to the output file
  fs.writeFile(outputFilePath, formattedList, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the VIP list to the file:', err);
    } else {
      console.log('VIP list saved to vip.txt');
    }
  });
});

