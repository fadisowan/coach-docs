import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const nav = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const release = JSON.parse(fs.readFileSync('release-manifest.json','utf8'));
const retired = release.removedRoutes;
const inventory = JSON.parse(fs.readFileSync('source-docs/manifest.json','utf8'));
assert.deepEqual(inventory.units.map(unit=>unit.folder.split('/').at(-1)).sort(), nav.map(entry=>entry.slug).sort(), 'All original documentation units must be published');
const files = ['index.html', '404.html', 'components/index.html', 'settings/index.html', 'preview-status/index.html', ...nav.map(entry => `docs/${entry.slug}/index.html`)];
let links = 0, images = 0;
const referencedAssets = new Set();
for (const file of files) {
  const html = fs.readFileSync('dist/' + file, 'utf8');
  assert.match(html, /<html[^>]*lang="ar"/, file);
  assert.match(html, /<html[^>]*dir="rtl"/, file);
  if(file.startsWith('docs/')) assert.ok(html.includes('1.76.1'),file+': wrong release');
  assert.ok(!html.includes('1.55.1'),file+': old release');
  assert.ok(!html.includes('class="missing-image"'), `${file}: unresolved image`);
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
    if (target.endsWith('.webp')) { images++; referencedAssets.add(target); } else links++;
  }
}
const hash = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const assets = fs.readdirSync('assets', {recursive:true}).filter(file => file.endsWith('.webp'));
for (const file of assets) {
  assert.equal(hash(path.join('assets',file)), hash(path.join('dist/assets',file)), file);
  assert.ok(referencedAssets.has('assets/'+file.replaceAll('\\','/')), `Original image is not displayed anywhere: ${file}`);
}
const flatten = fields => fields.flatMap(field => [field, ...flatten(field.item_fields || [])]);
let manifestPairs=0, manifestFields=0;
for (const entry of nav) {
  const folder=entry.folder;
  const manifest=JSON.parse(fs.readFileSync(`source-docs/${folder}/manifest.json`,'utf8'));
  const html=fs.readFileSync(`dist/docs/${entry.slug}/index.html`,'utf8');
  const codes=new Set([...html.matchAll(/<code\b[^>]*>([^<]*)<\/code>/g)].map(match=>match[1]));
  const expected=new Map();
  for (const field of flatten(manifest.fields)) {
    manifestFields++;
    assert.ok(codes.has(field.id), `${entry.slug}: missing field ${field.id}`);
    for(const pair of field.pairs || []) {
      manifestPairs++;
      for(const kind of ['panel','result']) {
        if (!pair[kind]) continue;
        const url=`/coach-docs/assets/${folder}/${pair[kind]}`;
        expected.set(url,(expected.get(url)||0)+1);
      }
    }
  }
  for(const [url,count] of expected) assert.ok(html.split(`src="${url}"`).length-1>=count,`${entry.slug}: incomplete image mapping ${url}`);
}
assert.equal(nav.filter(entry=>entry.category==='مكوّنات الصفحة الرئيسية').length,48);
assert.equal((fs.readFileSync('dist/components/index.html','utf8').match(/class="component-card"/g)||[]).length,48);
assert.equal((fs.readFileSync('dist/settings/index.html','utf8').match(/class="component-card"/g)||[]).length,15);
for(const slug of retired) assert.ok(!fs.existsSync(`dist/docs/${slug}/index.html`),'Retired page must not be published');
const builtAssets=fs.readdirSync('dist/assets',{recursive:true}).filter(f=>fs.statSync('dist/assets/'+f).isFile()).map(f=>f.replaceAll('\\','/')).sort();
assert.deepEqual(builtAssets,Object.keys(release.assets).sort(),'Stale deployed assets');
const builtPages=fs.readdirSync('dist',{recursive:true}).filter(f=>f.endsWith('.html')).map(f=>f.replaceAll('\\','/')).sort();
assert.deepEqual(builtPages,[...files].sort(),'Stale deployed pages');
assert.ok(fs.existsSync('dist/pagefind/pagefind.js'), 'Missing full text search index');
const previewAudit=JSON.parse(fs.readFileSync('preview-audit.json','utf8'));
for(const issue of previewAudit.issues){
 const html=fs.readFileSync(`dist/docs/${issue.slug}/index.html`,'utf8');
 assert.ok(html.includes('حدود المعاينات المتاحة'),`${issue.slug}: preview limitation must be visible`);
}
assert.ok(fs.readFileSync('dist/docs/08-product/index.html','utf8').includes('class="preview-rejected"'),'Error screenshot must be clearly labelled');
console.log(JSON.stringify({builtPages:files.length,internalReferences:links,imageReferences:images,preservedOriginalImages:assets.length,manifestFields,manifestPairs,brokenImages:0,uncapturedSlots:release.uncaptured.length,components:48}));
