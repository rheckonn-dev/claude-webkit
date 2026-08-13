import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const results = {};
for (const [name,w,h] of [['desktop',1440,900],['mobile',375,812]]) {
  const p = await (await b.newContext({viewport:{width:w,height:h}})).newPage();
  await p.goto('http://localhost:3000/',{waitUntil:'networkidle'});
  await p.evaluate(() => document.querySelectorAll('details').forEach(d => d.open = true));
  results[name] = await p.evaluate(() => {
    // Resolve ANY css colour (oklab, oklch, rgba, hex) to real sRGB via canvas.
    const cv = document.createElement('canvas'); cv.width = cv.height = 1;
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    const toRGBA = (css) => {
      ctx.clearRect(0,0,1,1); ctx.fillStyle = '#000';
      ctx.fillStyle = css; ctx.fillRect(0,0,1,1);
      const d = ctx.getImageData(0,0,1,1).data;
      return [d[0],d[1],d[2],d[3]/255];
    };
    const lum = ([r,g,b]) => { const f=c=>{c/=255;return c<=0.03928?c/12.92:((c+0.055)/1.055)**2.4};
      return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); };
    const over = (fg,bg) => fg.slice(0,3).map((c,i)=> c*fg[3] + bg[i]*(1-fg[3]));
    const effBg = (el) => {
      let n = el, stack = [];
      while (n && n !== document.documentElement) {
        const c = toRGBA(getComputedStyle(n).backgroundColor);
        if (c[3] > 0) { stack.push(c); if (c[3] >= 0.999) break; }
        n = n.parentElement;
      }
      let base = [255,255,255];
      for (let i = stack.length-1; i >= 0; i--) base = over(stack[i], base);
      return base;
    };
    const out = [];
    for (const el of document.querySelectorAll('p,h1,h2,h3,li,a,summary,dt,dd,span,strong')) {
      if (!el.textContent.trim()) continue;
      if (el.querySelector('p,h1,h2,h3,li,a,summary,dt,dd,span,strong')) continue;
      const cs = getComputedStyle(el);
      if (cs.display==='none' || cs.visibility==='hidden' || el.closest('.sr-only')) continue;
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
      const bg = effBg(el);
      const fg = over(toRGBA(cs.color), bg);
      const L1 = lum(fg), L2 = lum(bg);
      const ratio = (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
      const px = parseFloat(cs.fontSize);
      const need = (px >= 24 || (px >= 18.66 && Number(cs.fontWeight) >= 700)) ? 3 : 4.5;
      if (ratio < need) out.push({ t: el.textContent.trim().slice(0,40), ratio:+ratio.toFixed(2), need, px:Math.round(px) });
    }
    return out;
  });
}
for (const [k,v] of Object.entries(results))
  console.log(`${k}: ${v.length ? 'FAILURES\n  '+v.map(x=>JSON.stringify(x)).join('\n  ') : 'all text passes WCAG AA'}`);
await b.close();
