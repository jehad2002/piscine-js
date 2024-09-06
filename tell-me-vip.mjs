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

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Derive __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define the path to the JSON file and the output text file
// const jsonFilePath = path.join(__dirname, 'guests.json');
// const outputFilePath = path.join(__dirname, 'vip.txt');

// // Check if the JSON file exists
// fs.access(jsonFilePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log('No guests.json file found. Creating default file.');
//     const defaultData = JSON.stringify([]);
//     fs.writeFile(jsonFilePath, defaultData, 'utf8', (writeErr) => {
//       if (writeErr) {
//         console.error('Error creating the default JSON file:', writeErr);
//         return;
//       }
//       console.log('Default guests.json file created.');
//       processAndSaveVIPList();
//     });
//   } else {
//     processAndSaveVIPList();
//   }
// });

// function processAndSaveVIPList() {
//   // Read and parse the JSON file
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading the JSON file:', err);
//       return;
//     }

//     let guests;
//     try {
//       guests = JSON.parse(data);
//     } catch (parseError) {
//       console.error('Error parsing the JSON file:', parseError);
//       return;
//     }

//     // Filter the guests who answered "YES"
//     const vipGuests = guests.filter(guest => guest.response === 'YES');

//     // Sort guests alphabetically by Lastname then Firstname
//     vipGuests.sort((a, b) => {
//       if (a.lastname !== b.lastname) {
//         return a.lastname.localeCompare(b.lastname);
//       }
//       return a.firstname.localeCompare(b.firstname);
//     });

//     // Format the list
//     const formattedList = vipGuests.map((guest, index) => 
//       `${index + 1}. ${guest.lastname} ${guest.firstname}`
//     ).join('\n');

//     // Write the formatted list to the output file
//     fs.writeFile(outputFilePath, formattedList, 'utf8', (err) => {
//       if (err) {
//         console.error('Error writing the VIP list to the file:', err);
//       } else {
//         console.log('VIP list saved to vip.txt');
//       }
//     });
//   });
// }

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Derive __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define the path to the JSON file and the output text file
// const jsonFilePath = path.join(__dirname, 'guests.json');
// const outputFilePath = path.join(__dirname, 'vip.txt');

// // Ensure the output directory exists
// const outputDir = path.dirname(outputFilePath);
// fs.mkdir(outputDir, { recursive: true }, (err) => {
//   if (err) {
//     console.error('Error creating output directory:', err);
//     return;
//   }

//   // Check if the JSON file exists
//   fs.access(jsonFilePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.log('No guests.json file found. Creating default file.');
//       const defaultData = JSON.stringify([]);
//       fs.writeFile(jsonFilePath, defaultData, 'utf8', (writeErr) => {
//         if (writeErr) {
//           console.error('Error creating the default JSON file:', writeErr);
//           return;
//         }
//         console.log('Default guests.json file created.');
//         processAndSaveVIPList();
//       });
//     } else {
//       processAndSaveVIPList();
//     }
//   });
// });

// function processAndSaveVIPList() {
//   // Read and parse the JSON file
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading the JSON file:', err);
//       return;
//     }

//     let guests;
//     try {
//       guests = JSON.parse(data);
//     } catch (parseError) {
//       console.error('Error parsing the JSON file:', parseError);
//       return;
//     }

//     // Filter the guests who answered "YES"
//     const vipGuests = guests.filter(guest => guest.response === 'YES');

//     // Sort guests alphabetically by Lastname then Firstname
//     vipGuests.sort((a, b) => {
//       if (a.lastname !== b.lastname) {
//         return a.lastname.localeCompare(b.lastname);
//       }
//       return a.firstname.localeCompare(b.firstname);
//     });

//     // Format the list
//     const formattedList = vipGuests.map((guest, index) => 
//       `${index + 1}. ${guest.lastname} ${guest.firstname}`
//     ).join('\n');

//     // Write the formatted list to the output file
//     fs.writeFile(outputFilePath, formattedList, 'utf8', (err) => {
//       if (err) {
//         console.error('Error writing the VIP list to the file:', err);
//       } else {
//         console.log('VIP list saved to vip.txt');
//       }
//     });
//   });
// }

//============================

import { promises as fs } from 'fs';
import path from 'path';

// Define the path to the JSON file (modify as per your file structure)
const filePath = path.join(process.cwd(), 'guests.json');

async function generateVIPList() {
  try {
    // Read and parse the guests.json file
    const data = await fs.readFile(filePath, 'utf-8');
    const guests = JSON.parse(data);

    // Filter the guests who responded 'YES'
    const vipGuests = guests.filter(guest => guest.response === 'YES');

    // If no guests responded 'YES', do not create vip.txt
    if (vipGuests.length === 0) {
      console.log('');
      return;
    }

    // Sort the filtered guests alphabetically by Lastname, then Firstname
    vipGuests.sort((a, b) => {
      if (a.lastname === b.lastname) {
        return a.firstname.localeCompare(b.firstname);
      }
      return a.lastname.localeCompare(b.lastname);
    });

    // Format the output list
    const vipList = vipGuests.map((guest, index) => 
      `${index + 1}. ${guest.lastname} ${guest.firstname}`
    ).join('\n');

    // Define the output file path
    const outputPath = path.join(process.cwd(), 'vip.txt');

    // Write the formatted VIP list to vip.txt
    await fs.writeFile(outputPath, vipList, 'utf-8');

    // Print the generated vipList
    console.log(vipList);
  } catch (err) {
    // If guests.json doesn't exist, log an empty result
    if (err.code === 'ENOENT') {
      console.log('');
    } else {
      console.error('Error:', err.message);
    }
  }
}

// Run the function to generate the VIP list
generateVIPList();
