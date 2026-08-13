import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900} })).newPage();
await p.goto('http://localhost:3000/', { waitUntil:'networkidle' });

// force every lazy image to decode so currentSrc is populated
const n = await p.locator('img').count();
for (let i=0;i<n;i++){ const im=p.locator('img').nth(i); await im.scrollIntoViewIfNeeded();
  await im.evaluate(el=>el.complete&&el.naturalWidth>0?true:new Promise(r=>{el.addEventListener('load',r,{once:true});setTimeout(r,8000);})); }
await p.evaluate(()=>window.scrollTo(0,0));

const out = await p.evaluate(async () => {
  const toDataURI = async (url) => {
    const r = await fetch(url); const blob = await r.blob();
    return await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); });
  };

  // 1. collect stylesheet text, inlining the @font-face woff2 files
  let css = '';
  for (const sheet of document.styleSheets) {
    if (!sheet.href) { for (const r of sheet.cssRules) css += r.cssText + '\n'; continue; }
    let text = await (await fetch(sheet.href)).text();
    // Font URLs are written relative to the stylesheet ("../media/x.woff2"),
    // so resolve each against the sheet's own href before fetching it.
    const refs = [...new Set([...text.matchAll(/url\(([^)"']+?\.woff2?)\)/g)].map(m => m[1]))];
    for (const ref of refs) {
      const abs = new URL(ref, sheet.href).href;
      text = text.split(ref).join(await toDataURI(abs));
    }
    css += text + '\n';
  }

  // 2. freeze every <img> to a single inlined source
  for (const img of document.querySelectorAll('img')) {
    const d = await toDataURI(img.currentSrc);
    img.removeAttribute('srcset'); img.removeAttribute('loading');
    img.setAttribute('src', d);
  }

  // 3. static snapshot: drop the framework scripts
  document.querySelectorAll('script, link[rel="preload"], link[rel="stylesheet"]').forEach(e => e.remove());
  return { body: document.body.innerHTML, css, title: document.title };
});

await b.close();
writeFileSync('/tmp/claude-0/-home-user-claude-webkit/f4250171-141a-5a37-a924-a2dbd006ff4c/scratchpad/snapshot.json', JSON.stringify(out));
console.log('css', Math.round(out.css.length/1024)+'KB', '| body', Math.round(out.body.length/1024)+'KB');
