import { chromium } from 'playwright';
const OUT='/tmp/claude-0/-home-user-claude-webkit/f4250171-141a-5a37-a924-a2dbd006ff4c/scratchpad';
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await (await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:2})).newPage();
await p.goto('http://localhost:3000/',{waitUntil:'networkidle'});
const n = await p.locator('img').count();
for (let i = 0; i < n; i++) {
  const img = p.locator('img').nth(i);
  await img.scrollIntoViewIfNeeded();
  try {
    await img.evaluate(el => el.complete && el.naturalWidth > 0 ? true
      : new Promise((res, rej) => { el.addEventListener('load', res, {once:true});
                                    el.addEventListener('error', rej, {once:true});
                                    setTimeout(() => rej(new Error('timeout')), 8000); }));
  } catch (e) { console.log(`img[${i}] FAILED TO LOAD: ${e.message}`); continue; }
  const info = await img.evaluate(el => ({ nat:`${el.naturalWidth}x${el.naturalHeight}`,
    src: decodeURIComponent(el.currentSrc).split('/').pop().slice(0,48) }));
  console.log(`img[${i}] OK ${info.nat}  ${info.src}`);
}
// now every image is decoded; capture the two sections that looked blank
for (const [sel,name] of [['#why','bylaw'],['#how','how']]) {
  const el = p.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(700);
  await el.screenshot({ path:`${OUT}/sect-${name}.png` });
}
await b.close();
