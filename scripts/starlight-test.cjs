const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'C:/Users/fadis/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const remote = process.argv[2];
const root = path.resolve('dist');
const server = remote ? null : http.createServer((req,res) => {
  let file = decodeURIComponent(req.url.split('?')[0]).replace(/^\/coach-docs\//,'');
  if (!file || file.endsWith('/')) file += 'index.html';
  file = path.resolve(root,file);
  if (!file.startsWith(root+path.sep) || !fs.existsSync(file)) {res.writeHead(404);res.end();return;}
  const type = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.webp':'image/webp','.wasm':'application/wasm'}[path.extname(file)];
  res.writeHead(200,{'Content-Type':type||'application/octet-stream'});fs.createReadStream(file).pipe(res);
});
(async()=>{
  if(server) await new Promise(resolve=>server.listen(4174,'127.0.0.1',resolve));
  const base = remote || 'http://127.0.0.1:4174/coach-docs/';
  const browser = await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000},colorScheme:'light'});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base);
    await page.screenshot({path:'../starlight-desktop.png',fullPage:true});
    await page.locator('button[data-open-modal]').click();
    await page.locator('.pagefind-ui__search-input').fill('palette_source');
    await page.locator('.pagefind-ui__result-link').first().waitFor();
    assert.ok((await page.locator('.pagefind-ui__result-link').first().getAttribute('href')).includes('01-colors'));
    await page.locator('.pagefind-ui__result-link').first().click();
    assert.ok(page.url().includes('01-colors'));
    await page.locator('.sl-markdown-content img').first().click();
    assert.ok(await page.locator('#coach-image-dialog').evaluate(el=>el.open));
    await page.keyboard.press('Escape');
    assert.ok(await page.locator('#coach-image-dialog').evaluate(el=>!el.open));
    await page.screenshot({path:'../starlight-article-desktop.png',fullPage:false});
    await page.setViewportSize({width:360,height:800});
    await page.locator('button[popovertarget="starlight__sidebar"]').click();
    assert.ok(await page.locator('#starlight__sidebar').evaluate(el=>el.matches(':popover-open')));
    await page.keyboard.press('Escape');
    const nav=JSON.parse(fs.readFileSync('data.json','utf8'));
    for (const slug of ['', 'components/', 'settings/', 'preview-status/', 'updates/', ...nav.map(x=>'docs/'+x.slug+'/')]) {
      assert.equal((await page.goto(base+slug)).status(),200,slug);
      assert.equal(await page.locator('html').getAttribute('dir'),'rtl');
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Mobile overflow '+slug);
      assert.equal(await page.locator('h1').count(),1,slug);
      assert.equal(await page.locator('.missing-image').count(),0,slug);
      if(slug.startsWith('docs/')) assert.ok((await page.content()).includes('1.76.1'),slug);
      const anchors=await page.locator('starlight-toc a').evaluateAll(els=>els.every(el=>document.getElementById(decodeURIComponent(el.hash.slice(1)))));
      assert.ok(anchors,'TOC '+slug);
    }
    await page.goto(base+'components/');
    assert.equal(await page.locator('.component-card').count(),48);
    await page.screenshot({path:'../coach-components-mobile.png'});
    await page.locator('.component-card').first().locator('img').click();
    assert.ok(page.url().includes('01-coach-hero'));
    await page.goto(base+'settings/');
    assert.equal(await page.locator('.component-card').count(),15);
    await page.setViewportSize({width:1440,height:1000});
    await page.goto(base+'components/');
    await page.screenshot({path:'../coach-components-desktop.png'});
    await page.goto(base+'docs/'+nav.find(entry=>entry.key==='coach-cta').slug+'/');

    await page.setViewportSize({width:360,height:800});
    await page.goto(base+'docs/01-colors/');
    await page.locator('.sl-markdown-content img').first().evaluate(img=>img.decode());
    await page.screenshot({path:'../starlight-article-mobile.png',fullPage:false});
    await page.goto(base);
    await page.screenshot({path:'../starlight-mobile.png',fullPage:true});
    await page.locator('button[data-open-modal]').click();
    await page.locator('.pagefind-ui__search-input').fill('اللون');
    await page.locator('.pagefind-ui__result-link').first().waitFor();
    await page.keyboard.press('Escape');
    await page.goto(base+'docs/08-product/');
    const rejected=page.locator('.preview-rejected');
    assert.equal(await rejected.count(),1);
    assert.equal(await rejected.evaluate(el=>el.open),false);
    assert.equal(await rejected.locator('img[src$="/08-imagezoom-on-result.webp"]').count(),1);
    const update=JSON.parse(fs.readFileSync('update-1.87.1.json','utf8'));
    for(const slug of ['01-colors','04-header']) {
      await page.goto(base+'docs/'+slug+'/');
      for(const field of [...update.newFields,...update.modifiedFields].filter(x=>x.page===slug)) {
        assert.ok(await page.locator('.sl-markdown-content code').filter({hasText:new RegExp('^'+field.id+'$')}).count(),'Field '+field.id);
      }
      for(const item of update.imageAssignments.filter(x=>x.page===slug)) {
        assert.ok(await page.locator('img[src$="'+item.asset+'"]').count(),'Assigned image '+item.asset);
      }
      for(const width of [1440,768,360]) {
        await page.setViewportSize({width,height:900});
        assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Update overflow '+slug+width);
      }
      if(slug==='04-header') {
        assert.equal(await page.locator('img[src$="21-header_menu_bg-page-default-result.webp"]').locator('xpath=ancestor::table').locator('tbody tr').count(),3,'Three menu backgrounds');
        const text=await page.locator('.sl-markdown-content').innerText();
        assert.ok(text.indexOf('header_over_image')<text.indexOf('header_menu_bg') && text.indexOf('header_menu_bg')<text.indexOf('header_sticky'),'Menu setting order');
      }
      if(slug==='01-colors') {
        assert.equal(await page.locator('table').first().locator('tbody tr').count(),8,'Eight palettes');
        assert.equal(await page.locator('img[src$="18-button_shape-pill-default-result.webp"]').locator('xpath=ancestor::table').locator('tbody tr').count(),3,'Three button shapes');
        assert.equal(await page.locator('.sl-markdown-content').evaluate(el=>el.innerText.includes('| الخيار |')),false,'No malformed table');
        await page.locator('img[src*="/updates/"]').evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>{img.loading='eager';return img.decode();}));});
        await page.locator('table').first().scrollIntoViewIfNeeded();
        await page.screenshot({path:'../coach-update-mobile.png'});
      }
    }
    const assets=fs.readdirSync('assets',{recursive:true}).filter(x=>x.endsWith('.webp'));
    for(let i=0;i<assets.length;i+=24) {
      const results=await page.evaluate(async urls=>Promise.all(urls.map(url=>new Promise(resolve=>{let img=new Image();img.onload=()=>resolve(img.naturalWidth>0);img.onerror=()=>resolve(false);img.src=url;}))),assets.slice(i,i+24).map(x=>base+'assets/'+x.replaceAll('\\','/')));
      assert.ok(results.every(Boolean),'Image batch '+i);
    }
    await page.setViewportSize({width:1440,height:1000});
    await page.emulateMedia({colorScheme:'dark'});
    await page.goto(base+'docs/01-colors/');
    await page.screenshot({path:'../starlight-dark.png'});
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({base,pages:68,newSettings:update.newFields.length,modifiedSettings:update.modifiedFields.length,newImages:new Set(update.imageAssignments.map(x=>x.asset)).size,components:48,settingsAndShared:15,decodedImages:assets.length,missingImages:0,searchArabic:true,searchSettingId:true,mobileOverflow:false,lightbox:true,consoleErrors:errors}));
  }finally{await browser.close();server?.close();}
})().catch(error=>{console.error(error);server?.close();process.exitCode=1;});
