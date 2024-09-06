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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Derive __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the JSON file and the output text file
const jsonFilePath = path.join(__dirname, 'guests.json');
const outputFilePath = path.join(__dirname, 'vip.txt');

// Function to process and save the VIP list
function processAndSaveVIPList() {
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

    // Filter guests who answered "YES"
    const vipGuests = guests.filter(guest => guest.response === 'YES');

    // Sort guests alphabetically by Lastname, then Firstname
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
}

// Check if the JSON file exists
fs.access(jsonFilePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('No guests.json file found. Creating a default file.');
    const defaultData = JSON.stringify([]);
    fs.writeFile(jsonFilePath, defaultData, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error creating the default JSON file:', writeErr);
        return;
      }
      console.log('Default guests.json file created.');
      processAndSaveVIPList(); // Process the default empty list
    });
  } else {
    processAndSaveVIPList(); // Process the existing file
  }
});
