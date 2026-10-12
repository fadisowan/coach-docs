const fs=require('node:fs');
const http=require('node:http');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/fadis/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve('dist');
const remote=process.argv[2];
const server=remote?null:http.createServer((req,res)=>{
  let file=decodeURIComponent(req.url.split('?')[0]).replace(/^\/coach-docs\//,'');
  if(!file||file.endsWith('/'))file+='index.html';
  file=path.resolve(root,file);
  if(!file.startsWith(root+path.sep)||!fs.existsSync(file)){res.writeHead(404);res.end();return;}
  res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.webp':'image/webp'})[path.extname(file)]||'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async()=>{
  if(server)await new Promise(resolve=>server.listen(4175,'127.0.0.1',resolve));
  const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
  try{
    const page=await browser.newPage({colorScheme:'light'});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const base=remote||'http://127.0.0.1:4175/coach-docs/';
    for(const viewport of [{width:1440,height:1000},{width:360,height:800},{width:800,height:360}]){
      await page.setViewportSize(viewport);
      await page.goto(base+'docs/01-colors/');
      for(const selector of ['.sl-markdown-content img','.sl-markdown-content img[src$="-panel.webp"]']){
        const image=page.locator(selector).first();
        await image.click();
        await page.locator('#coach-image-dialog img').evaluate(img=>img.decode());
        const geometry=await page.locator('#coach-image-dialog').evaluate(el=>{
          const r=el.getBoundingClientRect();const image=el.querySelector('img').getBoundingClientRect();
          return {centerX:r.x+r.width/2,centerY:r.y+r.height/2,width:r.width,height:r.height,imageRect:{x:image.x,y:image.y,right:image.right,bottom:image.bottom},dialogRect:{x:r.x,y:r.y,right:r.right,bottom:r.bottom},imageInDialog:image.x>=r.x&&image.y>=r.y&&image.right<=r.right&&image.bottom<=r.bottom,scrollLocked:document.documentElement.style.overflow==='hidden'};
        });
        assert.ok(Math.abs(geometry.centerX-viewport.width/2)<2);
        assert.ok(Math.abs(geometry.centerY-viewport.height/2)<2);
        assert.ok(geometry.width<=viewport.width&&geometry.height<=viewport.height);
        assert.ok(geometry.imageInDialog&&geometry.scrollLocked,JSON.stringify(geometry));
        assert.equal(await page.locator('#coach-preview-title').textContent(),await image.getAttribute('alt'));
        if(selector.endsWith('img'))await page.screenshot({path:`../image-dialog-${viewport.width}.png`});
        await page.keyboard.press('Escape');
        assert.ok(await image.evaluate(el=>el===document.activeElement));
        assert.equal(await page.locator('#coach-image-dialog').evaluate(el=>el.open),false);
      }
      await page.locator('.sl-markdown-content img').first().click();
      await page.mouse.click(2,2);
      assert.equal(await page.locator('#coach-image-dialog').evaluate(el=>el.open),false);
      await page.locator('.sl-markdown-content img').first().click();
      await page.getByRole('button',{name:'إغلاق الصورة',exact:true}).click();
      assert.equal(await page.locator('#coach-image-dialog').evaluate(el=>el.open),false);
    }
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({base,viewports:3,imageTypes:2,centered:true,contained:true,escape:true,closeButton:true,backdrop:true,focusRestored:true,consoleErrors:errors}));
  }finally{await browser.close();server?.close();}
})().catch(e=>{console.error(e);server?.close();process.exitCode=1;});
