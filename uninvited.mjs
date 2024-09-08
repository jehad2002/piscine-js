import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5000;

// Define the directory where guest files will be stored
// Use a temporary directory if the `guests` directory cannot be created
const GUESTS_DIR = path.join(__dirname, 'guests');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const guestName = req.url.substring(1); // Remove leading slash
        const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                // Parse the JSON body
                const jsonData = JSON.parse(body);

                // Write the JSON data to the file
                fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'server failed' }));
                        return;
                    }
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(jsonData));
                });
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' }); // Use 400 for bad request
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
