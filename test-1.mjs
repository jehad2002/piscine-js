import { join } from 'path';
import { mkdir } from 'fs/promises';
import { exec } from 'child_process';

// تنفيذ السكربت واختبار النتيجة
const test = async ({ randStr, eq, ctx }) => {
  // اختبار عندما لا توجد أي ردود في الدليل
  const dirName = `guests-${randStr()}`;
  const dirPath = join(ctx.tmpPath, dirName);

  // إنشاء الدليل
  await mkdir(dirPath, { recursive: true });

  // تنفيذ السكربت مع مسار الدليل الديناميكي
  await new Promise((resolve, reject) => {
    exec(`node tell-me-vip.mjs ${dirPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });

  // قراءة محتوى ملف vip.txt للتحقق من أنه فارغ
  const { data } = await ctx.run(dirPath);
  return eq('', data);
};

// تصدير الاختبار
export default test;
