import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { mkdirSync } from 'fs';

const processGuests = async (dirPath) => {
  const invitationsPath = join(dirPath, 'invitations.json');  // Path to invitations.json in the test's dynamic dir
  const vipListPath = join(dirPath, 'vip.txt');  // Ensure vip.txt is also written in the same dynamic dir

  // Ensure the directory exists
  try {
    mkdirSync(dirPath, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
    throw err;
  }

  try {
    const data = await readFile(invitationsPath, 'utf8');
    const invitations = JSON.parse(data);
    const vipGuests = invitations.filter(guest => guest.response === 'YES');

    vipGuests.sort((a, b) => a.lastname.localeCompare(b.lastname));

    const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}\n`);
    
    await writeFile(vipListPath, formattedGuests.join(''), 'utf8');
    console.log('Success: VIP list saved to vip.txt.');
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};

// Export the function for testing
export { processGuests };
