import fs from 'node:fs';
import assert from 'node:assert/strict';
const nav = JSON.parse(fs.readFileSync('data.json','utf8'));
const reports=[];
const flatten = field => [...(field.pairs || []), ...(field.item_fields || []).flatMap(flatten)];
const escape = text => text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for (const entry of nav) {
  const folder = entry.category === 'الإعدادات العامة' ? '00-theme/' + entry.slug : entry.category === 'الخيارات المشتركة' ? entry.slug : 'sections/' + entry.slug;
  const manifest = JSON.parse(fs.readFileSync(`source-docs/${folder}/manifest.json`,'utf8'));
  const file = `src/content/docs/docs/${entry.slug}.md`;
  const original = fs.readFileSync(file,'utf8');
  const chunks = original.split(/(?=\n### )/);
  assert.equal(chunks.length-1,manifest.fields.length,entry.slug);
  let restored=0, pairs=0;
  manifest.fields.forEach((field,index)=>{
    assert.ok(chunks[index+1].includes('<code>'+field.id+'</code>'),entry.slug+':'+field.id);
    const expected=flatten(field);let rowIndex=0;
    chunks[index+1]=chunks[index+1].replace(/<tr>[\s\S]*?<\/tr>/g,row=>{
      if(!row.includes('<td>')) return row;
      const pair=expected[rowIndex++];assert.ok(pair,entry.slug+':'+field.id);
      let cellIndex=0;
      return row.replace(/<td>([\s\S]*?)<\/td>/g,(cell,content)=>{
        const kind=['panel','result'][cellIndex++];
        if(!kind) return cell;
        const filename=pair[kind];assert.ok(filename);
        assert.ok(fs.existsSync(`assets/${folder}/${filename}`),filename);
        if(content.includes('missing-image')) restored++;
        const reference=kind==='result' && /^00-/.test(filename);
        const alt=(kind==='panel'?'لوحة إعدادات':'معاينة '+(reference?'مرجعية':'النتيجة'))+' — '+field.label;
        return `<td><img alt="${escape(alt)}" src="/coach-docs/assets/${folder}/${filename}" loading="lazy" decoding="async"/>${reference?'<small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small>':''}</td>`;
      });
    });
    assert.equal(rowIndex,expected.length,entry.slug+':'+field.id);pairs+=rowIndex;
  });
  const result=chunks.join('');assert.ok(!result.includes('missing-image'),entry.slug);
  fs.writeFileSync(file,result);
  reports.push({slug:entry.slug,folder,fields:manifest.fields.length,pairs,restoredImageSlots:restored});
}
fs.writeFileSync('image-coverage.json',JSON.stringify(reports,null,2)+'\n');
fs.writeFileSync('missing-images.json','[]\n');
console.log(JSON.stringify({pages:reports.length,pairs:reports.reduce((n,r)=>n+r.pairs,0),restoredImageSlots:reports.reduce((n,r)=>n+r.restoredImageSlots,0)}));
