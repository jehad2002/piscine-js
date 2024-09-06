import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = join(__dirname, 'guests.json'); // Input file containing guests
const outputFile = join(__dirname, 'vip.txt');    // Output file to save VIP list

async function getVIPGuests() {
  try {
    // Read the guests.json file
    const data = await fs.readFile(inputFile, 'utf8');
    const guests = JSON.parse(data);

    // Filter guests who answered 'YES'
    const vipGuests = guests.filter(guest => guest.response === 'YES');

    // Sort guests alphabetically by last name and then first name
    vipGuests.sort((a, b) => {
      if (a.lastname === b.lastname) {
        return a.firstname.localeCompare(b.firstname);
      }
      return a.lastname.localeCompare(b.lastname);
    });

    // Format the list as 'Number. Lastname Firstname'
    const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`);

    // Write the formatted list to vip.txt
    await fs.writeFile(outputFile, formattedGuests.join('\n'), 'utf8');

    console.log('VIP list saved to vip.txt');
  } catch (error) {
    console.error('Error processing the guest list:', error);
  }
}

getVIPGuests();
