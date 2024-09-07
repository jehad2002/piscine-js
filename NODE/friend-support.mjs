// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Determine the directory name using import.meta.url
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define the port and directory where guest files are stored
// const PORT = 5000;
// const GUESTS_DIR = path.join(__dirname, 'guests');

// // Create the HTTP server
// const server = http.createServer((req, res) => {
//   // Get the guest name from the URL
//   const guestName = req.url?.slice(1); // Remove the leading '/'
//   const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

//   // Handle HTTP GET requests
//   if (req.method === 'GET') {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         if (err.code === 'ENOENT') {
//           // File not found
//           res.writeHead(404, { 'Content-Type': 'application/json' });
//           res.end(JSON.stringify({ error: 'guest not found' }));
//         } else {
//           // Server error
//           res.writeHead(500, { 'Content-Type': 'application/json' });
//           res.end(JSON.stringify({ error: 'server failed' }));
//         }
//       } else {
//         // File found and successfully read
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(data);
//       }
//     });
//   } else {
//     // Method not allowed
//     res.writeHead(405, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: 'method not allowed' }));
//   }
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

//=========================================================

import { createServer } from 'http';
import { readFile, access } from 'fs/promises';
import { join } from 'path';

// تحديد المسار لمجلد الضيوف
const GUESTS_DIR = join(process.cwd(), 'guests');

// إنشاء الخادم
const server = createServer(async (req, res) => {
  // التعامل مع الطلبات على مسار '/<guestName>'
  const guestName = req.url.slice(1);
  const filePath = join(GUESTS_DIR, `${guestName}.json`);

  try {
    // التحقق من وجود الملف
    await access(filePath);
    // قراءة محتويات الملف
    const data = await readFile(filePath, 'utf8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  } catch (err) {
    // التعامل مع الأخطاء
    if (err.code === 'ENOENT') {
      // إذا لم يتم العثور على الملف
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      // إذا كان هناك خطأ في الخادم
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

// بدء الاستماع على المنفذ 5000
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
