import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

// Define the path to the guests.json file
const filePath = (dir) => join(dir, 'guests.json');

// Read and process the guest list
async function processGuestList(dir) {
  try {
    // Read the JSON file containing the guest list
    const data = await readFile(filePath(dir), 'utf-8');

    // Parse the JSON data
    const guests = JSON.parse(data);

    // Filter out the guests who answered 'YES'
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

    // Join the formatted guests into a string with each guest on a new line
    const vipList = formattedGuests.join('\n');

    // Write the formatted list to a vip.txt file (create it even if it's empty)
    await writeFile(join(dir, 'vip.txt'), vipList, 'utf-8');
    
    console.log('VIP list successfully saved to vip.txt');
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If guests.json doesn't exist, create an empty vip.txt
      await writeFile(join(dir, 'vip.txt'), '', 'utf-8');
      console.log('No guests.json found, created an empty vip.txt');
    } else {
      console.error('Error processing guest list:', error);
    }
  }
}

// Export the function for use
export { processGuestList };
