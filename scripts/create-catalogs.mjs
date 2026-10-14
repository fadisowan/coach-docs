import fs from 'node:fs';
const nav=JSON.parse(fs.readFileSync('data.json','utf8'));
const escape=text=>text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for (const [slug,title,category,description] of [
  ['components','مكوّنات ثيم كوتش','مكوّنات الصفحة الرئيسية','تصفّح المكوّنات الـ٤٨. اختر المكوّن لمشاهدة إعداداته ومعايناته المتاحة في الحزمة الجديدة.'],
  ['settings','الإعدادات العامة والخيارات المشتركة',null,'كل إعدادات الثيم في مكان واحد: الهوية والحركة والتنقل والمنتجات، بالإضافة إلى الخيارات المشتركة بين الأقسام.']
]) {
  const entries=nav.filter(entry=>category?entry.category===category:entry.category!=='مكوّنات الصفحة الرئيسية');
  const cards=entries.map(entry=>{
    const folder=entry.folder;
    const manifest=JSON.parse(fs.readFileSync(`source-docs/${folder}/manifest.json`,'utf8'));
    const file=['00-desktop.webp','00-default-result.webp'].find(file=>fs.existsSync(`assets/${folder}/${file}`)) || fs.readdirSync(`assets/${folder}`).find(file=>file.endsWith('-panel.webp'));
    return `<a class="component-card" href="/coach-docs/docs/${entry.slug}/"><img src="/coach-docs/assets/${folder}/${file}" alt="${file.endsWith('-panel.webp')?'لوحة إعدادات':'معاينة'} ${escape(entry.title)}" loading="lazy" decoding="async"/><strong>${escape(entry.title)}</strong><span>${escape(manifest.intro||'شرح الإعدادات بالصور والمعاينات.')}</span><small>${file.endsWith('-panel.webp')?'معاينة النتيجة غير مصوّرة · ':''}عرض الشرح والإعدادات ←</small></a>`;
  }).join('\n');
  fs.writeFileSync(`src/content/docs/${slug}.md`,`---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\neditUrl: false\n---\n\n${description}\n\n<div class="component-catalog">\n${cards}\n</div>\n`);
}
