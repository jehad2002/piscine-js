import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { Buffer } from 'buffer';

// تحديد المسار لمجلد الضيوف
const GUESTS_DIR = join(process.cwd(), 'guests');

// قائمة المستخدمين المصرح لهم وكلمات السر
const AUTHORIZED_USERS = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

// دالة للتحقق من الاعتماديات
const authenticate = (authHeader) => {
  if (!authHeader) return false;
  const [scheme, credentials] = authHeader.split(' ');
  if (scheme !== 'Basic') return false;
  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  return AUTHORIZED_USERS[username] === password;
};

// إنشاء الخادم
const server = createServer(async (req, res) => {
  if (req.method === 'POST') {
    const guestName = req.url.slice(1);
    const filePath = join(GUESTS_DIR, `${guestName}.json`);

    // التحقق من الاعتماديات
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
        // محاولة كتابة الملف
        await writeFile(filePath, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      } catch (err) {
        // إذا كان هناك خطأ في الخادم
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });

    req.on('error', () => {
      // إذا حدث خطأ أثناء قراءة البيانات
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    });
  } else {
    // التعامل مع طرق أخرى غير POST
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'method not allowed' }));
  }
});

// بدء الاستماع على المنفذ 5000
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
