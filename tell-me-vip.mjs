import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const invitationsPath = join(__dirname, 'invitations.json');
const vipListPath = join(__dirname, 'vip.txt');

readFile(invitationsPath, 'utf8')
  .then(data => {
    const invitations = JSON.parse(data);
    const vipGuests = invitations.filter(guest => guest.response === 'YES');
    
    vipGuests.sort((a, b) => {
      if (a.lastname < b.lastname) return -1;
      if (a.lastname > b.lastname) return 1;
      return 0;
    });

    const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}\n`);
    return writeFile(vipListPath, formattedGuests.join(''), 'utf8');
  })
  .then(() => {
    console.log('success to save in vip.txt.');
  })
  .catch(err => console.error('Error :', err));
