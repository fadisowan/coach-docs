import fs from 'node:fs';
const nav = JSON.parse(fs.readFileSync('data.json','utf8'));
fs.mkdirSync('src/content/docs/docs',{recursive:true});
fs.mkdirSync('public',{recursive:true});
fs.cpSync('assets','public/assets',{recursive:true});
for (const entry of nav) {
  const html = fs.readFileSync(`docs/${entry.slug}/index.html`,'utf8');
  let body = html.split('class="article">')[1]?.split('</div><div class="note">')[0];
  if (!body) throw Error('Missing article: ' + entry.slug);
  body = body.replace(/<h1>[\s\S]*?<\/h1>/,'').replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_,level,title) => '\n\n' + '#'.repeat(Number(level)) + ' ' + title.replace(/<[^>]*>/g,'') + '\n\n');
  body = body.replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>').replace(/<\/table>/g,'</table></div>');
  const frontmatter = `---\ntitle: ${JSON.stringify(entry.title)}\ndescription: ${JSON.stringify('شرح '+entry.title+' في ثيم كوتش مع صور الإعدادات والنتائج.')}\neditUrl: false\n---\n\n`;
  fs.writeFileSync(`src/content/docs/docs/${entry.slug}.md`,frontmatter+body+'\n\n<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم وليست لقطات مباشرة من محرّر سلة؛ صور النتيجة من معاينة الثيم. اضغط على أي صورة لتكبيرها.</div>\n');
}
console.log(`Migrated ${nav.length} articles without changing original images or explanations.`);
