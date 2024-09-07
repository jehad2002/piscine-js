import http from 'http';
import fs from 'fs';
import path from 'path';

// Define the port and directory where guest files are stored
const PORT = 5000;
const GUESTS_DIR = path.join(__dirname, 'guests');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Get the guest name from the URL
  const guestName = req.url?.slice(1); // Remove the leading '/'
  const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

  // Handle HTTP GET requests
  if (req.method === 'GET') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // File not found
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'guest not found' }));
        } else {
          // Server error
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        }
      } else {
        // File found and successfully read
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    // Method not allowed
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'method not allowed' }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
