# NEXORA V1.0 — دليل التشغيل والنشر

هذه النسخة هي الواجهة الأولية لمنصة NEXORA. تحتوي على صفحة تعريفية، ولوحة تحكم تجريبية، وتنقل بين الأدوات، وواجهة محادثة شكلية.

## مهم قبل الاستخدام
- المحادثة الحالية تجريبية ولا تتصل بنموذج ذكاء اصطناعي بعد.
- تسجيل الدخول وقاعدة البيانات والدفع وتوليد الصور والفيديو ليست مفعلة بعد.
- أسعار Free / Pro / Ultra المعروضة تجريبية وليست عروضًا للبيع.
- لا تضع مفاتيح API داخل ملفات الواجهة أو GitHub.

## النشر عبر Cloudflare Pages من GitHub
1. أنشئ مستودعًا جديدًا في GitHub باسم `nexora`.
2. ارفع محتويات هذا المجلد إلى المستودع (وليس ملف ZIP نفسه).
3. في Cloudflare افتح Workers & Pages ثم Create application ثم Pages ثم Connect to Git.
4. اختر مستودع `nexora`.
5. إعدادات البناء:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
6. اضغط Save and Deploy.

## التشغيل المحلي (اختياري)
يتطلب Node.js:
- `npm install`
- `npm run dev`

## التقنيات
React + Vite + CSS + Lucide icons.
