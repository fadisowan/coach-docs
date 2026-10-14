import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const source=path.resolve(process.argv[2] || '../release-1.76.1');
const inventory=JSON.parse(fs.readFileSync(path.join(source,'manifest.json'),'utf8'));
assert.equal(inventory.version,'1.76.1');
const oldNav=JSON.parse(fs.readFileSync('data.json','utf8'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const report={version:inventory.version,assets:{},sourceFiles:{},uncaptured:[],removedRoutes:[]};
const nav=inventory.units.map(unit=>({...unit,slug:unit.folder.split('/').at(-1),category:unit.kind==='settings'?'الإعدادات العامة':unit.kind==='shared'?'الخيارات المشتركة':'مكوّنات الصفحة الرئيسية'}));
report.removedRoutes=oldNav.filter(old=>!nav.some(entry=>entry.slug===old.slug)).map(entry=>entry.slug);
for(const name of fs.readdirSync(source,{recursive:true})) {
  const relative=name.replaceAll('\\','/');const file=path.join(source,name);
  if(!fs.statSync(file).isFile())continue;
  const bytes=fs.readFileSync(file);
  const target=relative.endsWith('.webp')?'assets/'+relative:'source-docs/'+relative;
  fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);
  report[relative.endsWith('.webp')?'assets':'sourceFiles'][relative]=hash(bytes);
}
const escape=text=>String(text).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const flatten=field=>[...(field.pairs||[]),...(field.item_fields||[]).flatMap(flatten)];
let fieldCount=0,pairCount=0;
fs.mkdirSync('src/content/docs/docs',{recursive:true});
for(const entry of nav) {
  const m=JSON.parse(fs.readFileSync(`source-docs/${entry.folder}/manifest.json`,'utf8'));
  let body=fs.readFileSync(`source-docs/${entry.folder}/README.md`,'utf8').replaceAll('\r\n','\n').replace(/^# .+\n/,'');
  const image=(filename,kind,label)=>{
    if(!filename||!fs.existsSync(`assets/${entry.folder}/${filename}`)) {
      report.uncaptured.push({slug:entry.slug,field:label,kind});
      return '<span class="uncaptured-preview">لم تُلتقط هذه المعاينة في حزمة الإصدار 1.76.1؛ عرضها يتطلب بيانات متجر في سلة.</span>';
    }
    return `<img src="/coach-docs/assets/${entry.folder}/${filename}" alt="${escape(kind==='panel'?'لوحة إعدادات — '+label:'معاينة — '+label)}" loading="lazy" decoding="async"/>`;
  };
  const chunks=body.split(/(?=^### )/m);
  assert.equal(chunks.length-1,m.fields.length,entry.slug);
  chunks[0]=chunks[0].replace(/!\[[^\]]*\]\(\.\/([^)]+)\)/g,(_,filename)=>image(filename,'overview',entry.title));
  for(const [index,field] of m.fields.entries()) {
    const pairs=flatten(field);let current=0;
    assert.ok(chunks[index+1].includes('`'+field.id+'`'),entry.slug+':'+field.id);
    chunks[index+1]=chunks[index+1].replace(/^\|.*!\[[^\]]*\].*\|$/gm,row=>{
      const pair=pairs[current++];assert.ok(pair,entry.slug+':'+field.id);
      let kindIndex=0;
      return row.replace(/!\[[^\]]*\]\([^)]+\)/g,()=>{
        const kind=['panel','result'][kindIndex++];assert.ok(kind);
        return image(pair[kind],kind,field.label);
      });
    });
    assert.equal(current,pairs.length,entry.slug+':'+field.id);
    fieldCount+=1+(field.item_fields?.length||0);pairCount+=pairs.length;
  }
  body=chunks.join('').replace(/`\.\.\/\.\.\/01-shared\/`/g,'[الخيارات المشتركة](/coach-docs/docs/01-shared/)');
  const front=`---\ntitle: ${JSON.stringify(entry.title)}\ndescription: ${JSON.stringify('دليل ثيم كوتش 1.76.1 — '+entry.title)}\neditUrl: false\n---\n\n`;
  fs.writeFileSync(`src/content/docs/docs/${entry.slug}.md`,front+body+'\n\n<div class="source-note">الإصدار 1.76.1 · صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>\n');
}
report.fields=fieldCount;report.pairs=pairCount;
fs.writeFileSync('data.json',JSON.stringify(nav,null,2)+'\n');
fs.writeFileSync('release-manifest.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({version:report.version,pages:nav.length,images:Object.keys(report.assets).length,fields:fieldCount,pairs:pairCount,uncapturedSlots:report.uncaptured.length,removedRoutes:report.removedRoutes.length}));
