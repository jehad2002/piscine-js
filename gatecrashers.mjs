import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { Buffer } from 'buffer';

// Directory path for storing guest information
const GUESTS_DIR = join(process.cwd(), 'guests');

// List of authorized users and their passwords
const AUTHORIZED_USERS = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

// Function to check if the request has valid authentication
const authenticate = (authHeader) => {
  if (!authHeader) return false;
  const [scheme, credentials] = authHeader.split(' ');
  if (scheme !== 'Basic') return false;
  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  return AUTHORIZED_USERS[username] === password;
};

// Create and start the server
const server = createServer(async (req, res) => {
  if (req.method === 'POST') {
    const guestName = req.url.slice(1);
    const filePath = join(GUESTS_DIR, `${guestName}.json`);

    // Check for Basic Authentication
    const authHeader = req.headers['authorization'];
    if (!authenticate(authHeader)) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Authorization Required' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        // Write the received data to the JSON file
        await writeFile(filePath, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      } catch (err) {
        // Handle server errors
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });

    req.on('error', () => {
      // Handle errors while reading request data
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    });
  } else {
    // Handle non-POST requests
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'method not allowed' }));
  }
});

// Start listening on port 5000
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
