import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const nav = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const files = ['index.html', '404.html', ...nav.map(entry => `docs/${entry.slug}/index.html`)];
let links = 0, images = 0;
for (const file of files) {
  const html = fs.readFileSync('dist/' + file, 'utf8');
  assert.match(html, /<html[^>]*lang="ar"/, file);
  assert.match(html, /<html[^>]*dir="rtl"/, file);
  for (const [, attr, raw] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|tel:)/.test(raw)) continue;
    const url = new URL(raw.replaceAll('&amp;', '&'), 'https://fadisowan.github.io/coach-docs/' + file);
    assert.ok(url.pathname.startsWith('/coach-docs/'), `${file}: path outside deployment base: ${raw}`);
    let target = decodeURIComponent(url.pathname.slice('/coach-docs/'.length));
    if (!target || target.endsWith('/')) target += 'index.html';
    assert.ok(fs.existsSync('dist/' + target), `${file}: broken ${attr}: ${raw}`);
    if (url.hash && target.endsWith('.html')) {
      const linked = target === file ? html : fs.readFileSync('dist/' + target,'utf8');
      assert.ok(linked.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), `${file}: broken anchor ${raw}`);
    }
    if (target.endsWith('.webp')) images++; else links++;
  }
}
const hash = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const assets = fs.readdirSync('assets', {recursive:true}).filter(file => file.endsWith('.webp'));
for (const file of assets) assert.equal(hash(path.join('assets',file)), hash(path.join('dist/assets',file)), file);
assert.equal(images, 1863, 'All source image references must remain');
assert.ok(fs.existsSync('dist/pagefind/pagefind.js'), 'Missing full text search index');
console.log(JSON.stringify({builtPages:files.length,internalReferences:links,imageReferences:images,preservedOriginalImages:assets.length}));
