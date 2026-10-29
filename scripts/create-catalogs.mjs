import fs from 'node:fs';
const nav=JSON.parse(fs.readFileSync('data.json','utf8'));
const update=JSON.parse(fs.readFileSync('update-1.94.0.json','utf8'));
const limited=new Set(['05-dock','06-cart','12-exit','13-raed','14-article']);
const escape=x=>String(x).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const [slug,title,category,description]of[
 ['components','مكوّنات ثيم كوتش','مكوّنات الصفحة الرئيسية','تصفّح المكوّنات الـ٤٨ وإعداداتها ومعايناتها المتاحة.'],
 ['settings','الإعدادات العامة والخيارات المشتركة',null,'من تخصيص ← الخيارات العامة: الألوان، ثم الخط والأزرار، والحركة والتنقل والمنتجات، بالإضافة إلى الخيارات المشتركة بين الأقسام.']
]){
 const cards=[];
 for(const entry of nav.filter(e=>category?e.category===category:e.category!=='مكوّنات الصفحة الرئيسية')){
  const current=update.units.find(x=>x.slug===entry.slug);
  const folder=current?'updates/1.94.0/'+current.sourceFolder:entry.folder;
  const manifest=JSON.parse(fs.readFileSync(current?'source-docs/'+current.sourceManifest:'source-docs/'+entry.folder+'/manifest.json','utf8'));
  const file=(!limited.has(entry.slug)&&['00-desktop.webp','00-default-result.webp'].find(f=>fs.existsSync('assets/'+folder+'/'+f)))||fs.readdirSync('assets/'+folder).find(f=>f.endsWith('-panel.webp'));
  const colors=entry.slug==='01-colors';
  cards.push(`<a class="component-card" href="/coach-docs/docs/${entry.slug}/${colors?'#palette-source':''}"><img src="/coach-docs/assets/${folder}/${file}" alt="${file.endsWith('-panel.webp')?'لوحة إعدادات':'معاينة'} ${escape(entry.title)}" loading="lazy" decoding="async"/><strong>${escape(colors?'ألوان المتجر':entry.title)}</strong><span>${escape(colors?'مصدر الألوان والقوالب والألوان المتقدمة ومفاتيح إرجاع المجموعات.':manifest.intro||'شرح الإعدادات بالصور والمعاينات.')}</span><small>${file.endsWith('-panel.webp')?'معاينة النتيجة غير مصوّرة · ':''}عرض الشرح والإعدادات ←</small></a>`);
  if(colors)cards.push('<a class="component-card" href="/coach-docs/docs/01-colors/#fonts-buttons"><img src="/coach-docs/assets/00-theme/01-colors/04-font_source-store-panel.webp" alt="لوحة إعداد مصدر الخط" loading="lazy" decoding="async"/><strong>الخط والأزرار والكلمات المميّزة</strong><span>مصدر الخط، وشكل الأزرار، وتمييز الكلمات بين الأقواس المربعة.</span><small>عرض الشرح والإعدادات ←</small></a>');
 }
 fs.writeFileSync('src/content/docs/'+slug+'.md','---\ntitle: '+JSON.stringify(title)+'\ndescription: '+JSON.stringify(description)+'\neditUrl: false\n---\n\n'+description+'\n\n<div class="component-catalog">\n'+cards.join('\n')+'\n</div>\n');
}
