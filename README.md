# دليل كوتش — Astro Starlight

التوثيق العربي لثيم Coach على منصة سلة، مبني باستخدام Astro وStarlight مع RTL وبحث Pagefind محلي.

الموقع: https://fadisowan.github.io/coach-docs/

## التطوير والبناء

يتطلب Node.js 24 أو إصدارًا متوافقًا مع Astro.

```sh
npm ci
npm run dev
npm run build
node scripts/validate-build.mjs
npm run preview
```

افتح المسار `/coach-docs/` من خادم التطوير أو المعاينة.

## تحرير المحتوى

- `src/content/docs/index.mdx`: الصفحة الرئيسية.
- `src/content/docs/docs/*.md`: الشروحات الـ٦١، قابلة للتحرير مباشرة.
- `src/content/docs/404.md`: صفحة الخطأ العربية.
- `src/content/docs/components.md`: فهرس مرئي للمكوّنات الـ٤٨ كلها.
- `src/content/docs/settings.md`: فهرس الإعدادات العامة والخيارات المشتركة.
- `source-docs/`: ملفات README وmanifest الأصلية للحزم الخمس؛ تعتمد مطابقة الصور على manifest لأن بعض روابط README تستخدم أسماء بديلة غير موجودة.
- `src/styles/custom.css`: الهوية وتنسيق المقالات والصور والجوال.
- `astro.config.mjs`: RTL والعربية والقائمة ومسار GitHub Pages.
- `assets/`: الصور الأصلية؛ تُنسخ إلى `public/assets/` عند البناء دون تغيير.
- `docs/` وملفات HTML وCSS القديمة محفوظة كمرجع أصلي ولا تُنشر مع Starlight.
- `scripts/migrate-starlight.mjs`: أداة الاستيراد الأولي من HTML؛ لا تعمل أثناء البناء حتى لا تستبدل تحرير Markdown لاحقًا.

## النشر

GitHub Pages مضبوط على GitHub Actions. كل Push إلى `main` يشغّل `.github/workflows/pages.yml` لتثبيت الحزم بملف القفل، وبناء Starlight وفهرس البحث، وفحص الروابط والصور، ونشر `dist/`.

يحافظ الموقع على روابط `/coach-docs/docs/<slug>/` السابقة.

## التحقق والمحتوى الأصلي

- `node scripts/validate.mjs`: يفحص ملفات المصدر الأصلية.
- `node scripts/validate-build.mjs`: يفحص العربية وRTL وكل المراجع الداخلية والمراسي في النسخة المبنية، ويقارن بصمات الصور الأصلية مع الناتج.
- `node scripts/starlight-test.cjs`: اختبار متصفح محلي للبحث بالعربية وبمعرّف الإعداد، والتنقل وتكبير الصور والجوال وفك ترميز جميع الصور.
- `node scripts/starlight-test.cjs https://fadisowan.github.io/coach-docs/`: الاختبار نفسه على الموقع المنشور.
- اختبار المتصفح يحتاج Playwright وEdge على Windows؛ يمكن تحديد مسار حزمة Playwright عبر `PLAYWRIGHT_PATH`.

حُفظت الصور الأصلية الـ١٥٨٥ والشروحات جميعها، وكل صورة مرتبطة بصفحات التوثيق. أُصلحت ٢٤٦ خانة صورة باستخدام الأسماء الصحيحة في manifest بدل أسماء README القديمة. لا توجد خانات صور ناقصة في الموقع الحالي (`missing-images.json` فارغ).

جرت مطابقة الإعدادات الـ٨١٩ وأزواج اللوحات والنتائج الـ١٠٠٠ مع ملفات المصدر. بعض الإعدادات تشترك في معاينة مرجعية يحدّدها manifest؛ تُعرض ملاحظة أسفل المعاينة المشتركة دون اختلاق لقطة جديدة أو حذف الشرح الأصلي. تفاصيل التغطية في `image-coverage.json`.

`scripts/restore-manifest-images.mjs` أداة تصحيح الاستيراد الأولي، وليست جزءًا من البناء المعتاد. `scripts/create-catalogs.mjs` يعيد توليد صفحات الفهارس من ملفات المصدر.
