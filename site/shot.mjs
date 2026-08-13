import { chromium } from 'playwright';
const OUT = '/tmp/claude-0/-home-user-claude-webkit/f4250171-141a-5a37-a924-a2dbd006ff4c/scratchpad';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const sizes = [ ['desktop',1440,900], ['laptop',1024,800], ['tablet',768,1024], ['mobile',375,812] ];
const errors = [];
for (const [name,w,h] of sizes) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:2 });
  const p = await ctx.newPage();
  p.on('console', m => { if (m.type()==='error') errors.push(`[${name}] ${m.text()}`); });
  p.on('pageerror', e => errors.push(`[${name}] PAGEERROR ${e.message}`));
  await p.goto('http://localhost:3000/', { waitUntil:'networkidle' });
  await p.waitForTimeout(900);
  await p.screenshot({ path:`${OUT}/qa-${name}-full.png`, fullPage:true });
  await p.screenshot({ path:`${OUT}/qa-${name}-fold.png` });
  // horizontal overflow check
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(`${name} ${w}x${h} overflowX=${overflow}`);
  await ctx.close();
}
console.log('CONSOLE ERRORS:', errors.length ? errors.join('\n') : 'none');
await b.close();
