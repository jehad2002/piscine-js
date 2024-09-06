import { promises as fs } from 'fs';
import path from 'path';

// Define the function to generate the VIP list
async function generateVIPList(dirPath) {
  try {
    // Construct the path to the guests.json file
    const filePath = path.join(dirPath, 'guests.json');

    // Check if the guests.json file exists
    await fs.access(filePath);

    // Read and parse the guests.json file
    const data = await fs.readFile(filePath, 'utf-8');
    const guests = JSON.parse(data);

    // Filter the guests who responded 'YES'
    const vipGuests = guests.filter(guest => guest.response === 'YES');

    // If no guests responded 'YES', do not create vip.txt
    if (vipGuests.length === 0) {
      console.log('');
      return '';
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
    const outputPath = path.join(dirPath, 'vip.txt');

    // Write the formatted VIP list to vip.txt
    await fs.writeFile(outputPath, vipList, 'utf-8');

    // Print the generated vipList and return it
    console.log(vipList);
    return vipList;
  } catch (err) {
    // If guests.json doesn't exist or any other error occurs, log an empty result
    if (err.code === 'ENOENT') {
      console.log('');
      return '';
    } else {
      console.error('Error:', err.message);
      throw err;
    }
  }
}

// Run the function with the directory path passed from the context
const dirPath = process.argv[2] || process.cwd();  // Directory path from arguments or current directory
generateVIPList(dirPath);
