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

//==================================

import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

// دالة لمعالجة الضيوف وحفظ قائمة VIP
const processGuests = async (dirPath) => {
  const invitationsPath = join(dirPath, 'invitations.json');  // المسار إلى invitations.json
  const vipListPath = join(dirPath, 'vip.txt');  // المسار إلى vip.txt

  // التأكد من وجود الدليل
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error('خطأ في إنشاء الدليل:', err);
    throw err;
  }

  try {
    // قراءة ملف invitations.json
    const data = await readFile(invitationsPath, 'utf8');
    const invitations = JSON.parse(data);

    // تصفية الضيوف الذين أجابوا بـ 'YES'
    const vipGuests = invitations.filter(guest => guest.response === 'YES');

    // ترتيب الضيوف حسب اسم العائلة (ترتيب أبجدي تصاعدي)
    vipGuests.sort((a, b) => a.lastname.localeCompare(b.lastname));

    // تنسيق الضيوف: رقم. اسم العائلة الاسم الأول
    const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}\n`);

    // كتابة القائمة المنسقة إلى vip.txt
    await writeFile(vipListPath, formattedGuests.join(''), 'utf8');

    console.log('تم حفظ قائمة VIP إلى vip.txt.');
  } catch (err) {
    console.error('خطأ في قراءة أو كتابة الملفات:', err);
  }
};

// استخدام الدالة: قم بتمرير مسار الدليل الديناميكي
const dirPath = process.argv[2] || '.'; // قبول مسار الدليل كوسيط سطر أوامر أو الافتراضي إلى الدليل الحالي
processGuests(dirPath);
