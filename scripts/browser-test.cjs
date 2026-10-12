const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const assert = require('node:assert/strict');
const {chromium} = require(process.env.PLAYWRIGHT_PATH || 'C:/Users/fadis/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const remote = process.argv[2];
const root = process.cwd();
const server = remote ? null : http.createServer((req,res) => {
  let file = decodeURIComponent(req.url.split('?')[0]).replace(/^\/coach-docs\//,'');
  if (!file || file.endsWith('/')) file += 'index.html';
  file = path.resolve(root, file);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) {res.writeHead(404);res.end();return;}
  const type = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.webp':'image/webp'}[path.extname(file)];
  res.writeHead(200,{'Content-Type':type || 'application/octet-stream'});fs.createReadStream(file).pipe(res);
});
(async () => {
  if(server) await new Promise(resolve=>server.listen(4173,'127.0.0.1',resolve));
  const base = remote || 'http://127.0.0.1:4173/coach-docs/';
  const browser = await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    await page.goto(base);
    assert.equal(await page.locator('#sidebar-nav a').count(),61);
    await page.screenshot({path:'../coach-desktop.png'});
    await page.locator('#search').fill('palette_source');
    await page.waitForFunction(()=>document.querySelectorAll('#sidebar-nav a').length===1);
    await page.locator('#sidebar-nav a').click();
    assert.ok(page.url().includes('01-colors'));
    await page.locator('.article img').first().click();
    assert.ok(await page.locator('.lightbox').evaluate(el=>el.classList.contains('open')));
    await page.keyboard.press('Escape');
    assert.ok(await page.locator('.lightbox').evaluate(el=>!el.classList.contains('open')));
    await page.locator('#search').fill('zzzz-no-results');
    assert.equal(await page.locator('#sidebar-nav a').count(),0);
    assert.match(await page.locator('.search-status').textContent(),/لا توجد/);
    await page.setViewportSize({width:360,height:800});
    await page.locator('#menu').click();
    assert.equal(await page.locator('#menu').getAttribute('aria-expanded'),'true');
    await page.locator('.menu-backdrop').click({position:{x:10,y:400}});
    assert.equal(await page.locator('#menu').getAttribute('aria-expanded'),'false');
    const nav=JSON.parse(fs.readFileSync('data.json','utf8'));
    for (const slug of ['',...nav.map(x=>'docs/'+x.slug+'/')]) {
      const response=await page.goto(base+slug);
      assert.equal(response.status(),200,slug);
      assert.equal(await page.locator('html').getAttribute('dir'),'rtl');
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1), 'Overflow: '+slug);
      const anchors=await page.locator('#toc-links a').evaluateAll(els=>els.every(el=>document.getElementById(el.hash.slice(1))));
      assert.ok(anchors,'TOC '+slug);
    }
    await page.goto(base+'docs/01-colors/#heading-2');
    await page.screenshot({path:'../coach-mobile.png'});
    const assets=fs.readdirSync('assets',{recursive:true}).filter(x=>x.endsWith('.webp'));
    let decoded=0;
    for(let i=0;i<assets.length;i+=24){
      const results=await page.evaluate(async urls=>Promise.all(urls.map(url=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img.naturalWidth>0);img.onerror=()=>resolve(false);img.src=url;}))),assets.slice(i,i+24).map(x=>base+'assets/'+x.replaceAll('\\','/')));
      assert.ok(results.every(Boolean),'Image batch '+i);
      decoded+=results.length;
    }
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({base,pages:62,decodedImages:decoded,mobileOverflow:false,search:true,navigation:true,lightbox:true,consoleErrors:errors}));
  } finally {await browser.close();server?.close();}
})().catch(error=>{console.error(error);server?.close();process.exitCode=1;});
