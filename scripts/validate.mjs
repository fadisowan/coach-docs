import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const release=JSON.parse(fs.readFileSync('release-manifest.json','utf8'));
const nav=JSON.parse(fs.readFileSync('data.json','utf8'));
const inventory=JSON.parse(fs.readFileSync('source-docs/manifest.json','utf8'));
assert.equal(release.version,'1.76.1');assert.equal(inventory.version,release.version);
assert.deepEqual(nav.map(e=>e.folder).sort(),inventory.units.map(e=>e.folder).sort());
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for(const [directory,expected] of [['assets',release.assets],['source-docs',release.sourceFiles]]) {
  const files=fs.readdirSync(directory,{recursive:true}).filter(f=>fs.statSync(directory+'/'+f).isFile()).map(f=>f.replaceAll('\\','/')).sort();
  assert.deepEqual(files,Object.keys(expected).sort(),`${directory}: old or missing source files`);
  for(const file of files)assert.equal(hash(directory+'/'+file),expected[file],file);
}
assert.deepEqual(fs.readdirSync('src/content/docs/docs').sort(),nav.map(e=>e.slug+'.md').sort(),'Old documentation pages remain');
for(const stale of ['archived','docs','index.html','app.js','style.css','search-index.json','retired-components.json'])assert.ok(!fs.existsSync(stale),'Legacy content remains: '+stale);
for(const entry of nav)assert.ok(fs.readFileSync(`src/content/docs/docs/${entry.slug}.md`,'utf8').includes('1.76.1'));
console.log(JSON.stringify({version:release.version,units:nav.length,images:Object.keys(release.assets).length,oldSourceFiles:0,uncapturedSlots:release.uncaptured.length}));
