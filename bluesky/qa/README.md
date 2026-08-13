# QA scripts

## `contrast-check.mjs`

Walks every text node on the running site, resolves the real composited
background behind it, and reports anything that fails WCAG AA.

It resolves colours through a canvas rather than parsing the computed style
string. That matters: Tailwind 4 returns colours as `oklab(...)`, and a naive
regex parser reads those numbers as RGB and invents failures that aren't there.

Run it from inside `site/` — Node resolves `playwright` from `site/node_modules`,
so calling the script by its path from up here fails with MODULE_NOT_FOUND.

```bash
cd site
npm install --no-save playwright
npm run build && npm run start &      # serve the production build on :3000
cp ../bluesky/qa/contrast-check.mjs . && node contrast-check.mjs; rm contrast-check.mjs
```

Expected output:

```
desktop: all text passes WCAG AA
mobile: all text passes WCAG AA
```

Run it after any colour change. It catches the failure mode that is invisible
in code review — text rendered in the same colour as the surface behind it.
