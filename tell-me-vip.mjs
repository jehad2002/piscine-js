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

import { readFile, writeFile, mkdir, existsSync } from 'fs/promises';
import { join } from 'path';
import { mkdirSync, writeFileSync } from 'fs';

const processGuests = async (dirPath) => {
  const invitationsPath = join(dirPath, 'invitations.json');
  const vipListPath = join(dirPath, 'vip.txt');

  try {
    // Ensure the directory exists
    mkdirSync(dirPath, { recursive: true });

    // Check if vip.txt exists
    if (!existsSync(vipListPath)) {
      // If it doesn't exist, create an empty file
      writeFileSync(vipListPath, '');
    }

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

export { processGuests };
