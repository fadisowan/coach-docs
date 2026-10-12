import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const nav = JSON.parse(fs.readFileSync('data.json','utf8'));
const files = ['index.html', ...nav.map(entry => `docs/${entry.slug}/index.html`)];
let links = 0, images = 0;
const referenced = new Set();
for (const file of files) {
  const html = fs.readFileSync(file,'utf8');
  assert.match(html, /<html[^>]*lang="ar"/, file);
  assert.match(html, /<html[^>]*dir="rtl"/, file);
  assert.match(html, /id="main-content"/, file);
  assert.equal((html.match(/<details>/g)||[]).length, (html.match(/<\/details>/g)||[]).length, file);
  for (const [, attribute, url] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    assert.ok(url.startsWith('/coach-docs/'), `${file}: unexpected path ${url}`);
    let target = url.replace('/coach-docs/', '');
    if (!target || target.endsWith('/')) target += 'index.html';
    assert.ok(fs.existsSync(target), `${file}: broken ${attribute} ${url}`);
    if (url.endsWith('.webp')) {
      images++;
      referenced.add(target);
      const bytes = fs.readFileSync(target);
      assert.equal(bytes.toString('ascii',0,4), 'RIFF', target);
      assert.equal(bytes.toString('ascii',8,12), 'WEBP', target);
    } else links++;
  }
  for (const entry of nav) assert.ok(fs.existsSync(`docs/${entry.slug}/index.html`), entry.slug);
}
const search = JSON.parse(fs.readFileSync('search-index.json','utf8'));
assert.equal(search.length, nav.length);
assert.ok(search.every(entry => entry.text.length > 100));
console.log(JSON.stringify({pages:files.length, links, imageReferences:images, uniqueReferencedImages:referenced.size, sourceMissingImageRows:JSON.parse(fs.readFileSync('missing-images.json')).length}));
