import { chromium } from 'playwright';
const OUT='/tmp/claude-0/-home-user-claude-webkit/f4250171-141a-5a37-a924-a2dbd006ff4c/scratchpad';
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const errs=[];
for (const [name,w,h] of [['desktop',1440,900],['laptop',1024,800],['tablet',768,1024],['mobile',375,812]]) {
  const ctx = await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:2});
  const p = await ctx.newPage();
  p.on('console', m=>{if(m.type()==='error')errs.push(`[${name}] ${m.text()}`)});
  p.on('pageerror', e=>errs.push(`[${name}] ${e.message}`));
  p.on('response', r=>{if(r.request().resourceType()==='image'&&r.status()>=400)errs.push(`[${name}] ${r.status()} ${r.url()}`)});
  await p.goto('http://localhost:3000/',{waitUntil:'networkidle'});
  const n = await p.locator('img').count();
  for (let i=0;i<n;i++){ const im=p.locator('img').nth(i); await im.scrollIntoViewIfNeeded();
    await im.evaluate(el=>el.complete&&el.naturalWidth>0?true:new Promise((res,rej)=>{
      el.addEventListener('load',res,{once:true}); el.addEventListener('error',rej,{once:true});
      setTimeout(()=>rej(new Error('img timeout')),8000);})).catch(e=>errs.push(`[${name}] img${i} ${e.message}`)); }
  await p.evaluate(()=>window.scrollTo(0,0)); await p.waitForTimeout(500);
  await p.screenshot({path:`${OUT}/qa-${name}-full.png`, fullPage:true});
  await p.screenshot({path:`${OUT}/qa-${name}-fold.png`});
  const o = await p.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
  console.log(`${name.padEnd(8)} ${w}x${h}  overflowX=${o}`);
  await ctx.close();
}
console.log('ERRORS:', errs.length?errs.join('\n'):'none');
await b.close();
