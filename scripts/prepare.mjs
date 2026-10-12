import fs from 'node:fs';
const nav = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const strip = html => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const index = [];
const missing = [];
for (const file of ['index.html', ...nav.map(entry => `docs/${entry.slug}/index.html`)]) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<title>(.*?) \| Coach Docs<\/title>/, '<title>$1 | دليل كوتش</title>')
    .replace('✦ Coach <em>Docs</em>', '✦ كوتش <em>الدليل</em>')
    .replace('Coach Docs — دليل ثيم كوتش لمنصة سلة', 'دليل كوتش — توثيق ثيم كوتش لمنصة سلة')
    .replace(/<body>(?!<a class="skip-link")/, '<body><a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>')
    .replace('<main class="main">', '<main class="main" id="main-content">');
  let heading = '';
  html = html.replace(/<h[123][^>]*>[\s\S]*?<\/h[123]>|<tr>[\s\S]*?<\/tr>/g, chunk => {
    if (/^<h/.test(chunk)) { heading = strip(chunk); return chunk; }
    if (chunk.includes('missing-image')) missing.push({page:file, heading, context:strip(chunk)});
    return chunk;
  });
  heading = '';
  html = html.replace(/<h[123][^>]*>[\s\S]*?<\/h[123]>|<img alt="[^"]*" src="([^"]+)"[^>]*>/g, (chunk, src) => {
    if (!src) { heading = strip(chunk); return chunk; }
    const kind = src.includes('-panel.') ? 'لوحة إعدادات' : src.includes('mobile') ? 'معاينة الجوال' : 'معاينة النتيجة';
    return `<img alt="${kind} — ${heading.replace(/"/g, '&quot;')}" src="${src}" loading="lazy" decoding="async"/>`;
  });
  // The source export closed each merchant guide before its content.
  html = html.replace(/<p><details><summary>من دليل التاجر<\/summary><\/details><\/p>([\s\S]*?)<p><\/p>/g,
    '<details><summary>من دليل التاجر</summary>$1</details>');
  fs.writeFileSync(file, html);
  const entry = nav.find(entry => file === `docs/${entry.slug}/index.html`);
  if (entry) index.push({...entry, text:strip(html.split('class="article">')[1]?.split('</div><div class="note">')[0] || '')});
}
fs.writeFileSync('search-index.json', JSON.stringify(index));
fs.writeFileSync('missing-images.json', JSON.stringify(missing, null, 2));
console.log(`${index.length} documentation pages; ${missing.length} rows with images absent from source archive.`);
