import { promises as fs } from 'fs';
import path from 'path';

// Function to generate the VIP list
async function generateVIPList(dirPath) {
  try {
    // Construct the path to the guests.json file
    const filePath = path.join(dirPath, 'guests.json');

    // Read the guests.json file
    const data = await fs.readFile(filePath, 'utf-8');
    const guests = JSON.parse(data);

    // Filter guests who responded 'YES'
    const vipGuests = guests.filter(guest => guest.response === 'YES');

    // If no guests responded 'YES', log and return an empty string
    if (vipGuests.length === 0) {
      console.log('');
      return '';
    }

    // Sort guests alphabetically by Lastname, then Firstname
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
    const outputPath = path.join(dirPath, 'vip.txt');

    // Write the VIP list to vip.txt
    await fs.writeFile(outputPath, vipList, 'utf-8');

    // Print the formatted VIP list
    console.log(vipList);
    return vipList;

  } catch (err) {
    // If guests.json doesn't exist or any other error occurs, log and return an empty string
    if (err.code === 'ENOENT') {
      console.log('');
      return '';
    } else {
      console.error('Error:', err.message);
      throw err;
    }
  }
}

// Get the directory path from the command-line argument or use the current directory
const dirPath = process.argv[2] || process.cwd();

// Run the function with the provided directory path
generateVIPList(dirPath);
