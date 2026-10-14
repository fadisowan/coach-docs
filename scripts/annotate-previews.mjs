import fs from 'node:fs';
const nav=JSON.parse(fs.readFileSync('data.json','utf8'));
const audit=JSON.parse(fs.readFileSync('preview-audit.json','utf8'));
const release=JSON.parse(fs.readFileSync('release-manifest.json','utf8'));
const flatten=f=>[...(f.pairs||[]),...(f.item_fields||[]).flatMap(flatten)];
let sharedSlots=0;
for(const entry of nav){
 const m=JSON.parse(fs.readFileSync(`source-docs/${entry.folder}/manifest.json`,'utf8'));
 const counts=new Map();for(const f of m.fields)for(const pair of flatten(f))if(pair.result)counts.set(pair.result,(counts.get(pair.result)||0)+1);
 const file=`src/content/docs/docs/${entry.slug}.md`;
 let text=fs.readFileSync(file,'utf8');
 const issue=audit.issues.find(item=>item.slug===entry.slug);
 if(issue&&!text.includes('<!-- preview-audit -->')){
  const position=text.indexOf('\n|');
  text=text.slice(0,position)+'\n<!-- preview-audit -->\n:::caution[حدود المعاينات المتاحة]\n'+issue.detail+'\n:::\n'+text.slice(position);
  if(!issue.fields)text=text.replaceAll('| النتيجة |','| المعاينة المرجعية المتاحة |');
 }
 const chunks=text.split(/(?=^### )/m);
 for(const [i,field] of m.fields.entries()){
  const pairs=flatten(field);let row=0;
  chunks[i+1]=chunks[i+1].replace(/^\|.*<img.*\|$/gm,line=>{
   const pair=pairs[row++];if(!pair)return line;
   let imageIndex=0;
   return line.replace(/<img\b[^>]*\/>/g,image=>{
    if(imageIndex++!==1||!pair.result)return image;
    if(issue?.rejectedImages?.includes(pair.result)){
     if(line.includes('preview-rejected'))return image;
     return '<span class="uncaptured-preview">لا توجد معاينة صالحة لهذا الخيار في المصدر؛ اللقطة المرفقة تعرض خطأ 404.</span><details class="preview-rejected"><summary>عرض لقطة المصدر غير الصالحة للمعاينة</summary>'+image.replace(/alt="[^"]*"/,'alt="لقطة المصدر: صفحة خطأ 404، وليست معاينة لتكبير الصورة"')+'</details>';
    }
    const needsNote=counts.get(pair.result)>1 || /^00-/.test(pair.result) || (issue&&(issue.fields?issue.fields.includes(field.id):true));
    if(!needsNote)return image;
    sharedSlots++;
    if(line.includes('class="image-reference"'))return image;
    const label=issue&&(issue.fields?issue.fields.includes(field.id):true)?'صورة مرجعية؛ لا تُظهر الحالة الفعلية لهذا الخيار.':'صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.';
    return image+'<small class="image-reference">'+label+'</small>';
   });
  });
 }
 fs.writeFileSync(file,chunks.join(''));
}
const rows=audit.issues.map(issue=>{const entry=nav.find(e=>e.slug===issue.slug);return `| [${entry.title}](/coach-docs/docs/${issue.slug}/) | ${issue.detail} |`;}).join('\n');
const absent=[...new Set(release.uncaptured.map(item=>item.slug))].map(slug=>{const entry=nav.find(e=>e.slug===slug);return `- [${entry.title}](/coach-docs/docs/${slug}/)`;}).join('\n');
fs.writeFileSync('src/content/docs/preview-status.md','---\ntitle: حالة معاينات التوثيق\ndescription: مراجعة بصرية للمعاينات العامة والحالات غير المصوّرة ولقطات المصدر غير الصالحة.\neditUrl: false\n---\n\nفُحصت الصور بصريًا إلى جانب مطابقة روابطها بملفات المصدر. نجاح تحميل الصورة لا يعني أنها تُظهر الحالة المطلوبة. لوحات الإعدادات مرسومة من تعريفات الثيم، والمعاينات صور ثابتة ببيانات تجريبية؛ لا توضح الصور الثابتة وحدها الحركة أو التفاعل كاملًا.\n\n## حالات تحتاج معاينات فعلية جديدة\n\n| الصفحة | نتيجة المراجعة |\n|---|---|\n'+rows+'\n\n## معاينات غير ملتقطة بحسب الحزمة\n\nتتضمن الحزمة '+release.uncaptured.length+' موضع معاينة غير ملتقط، موزّعة على الصفحات التالية. تبقى اللوحات والشروحات المتاحة مع تنبيه في الموضع غير المصوّر.\n\n'+absent+'\n\n## الصور المرجعية المشتركة\n\nعندما تستخدم عدة خيارات الصورة نفسها، يظهر تحتها توضيح بأنها مرجع مشترك وليست لقطة مستقلة لتغيير الإعداد. لم تُختلق صور بديلة، ولم تُحذف ملفات المصدر الأصلية.\n');
console.log(JSON.stringify({pagesWithSpecificLimits:audit.issues.length,sharedReferenceSlots:sharedSlots,uncapturedSourceSlots:release.uncaptured.length}));
