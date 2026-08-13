# QA scripts

Both scripts drive a headless browser against the running production build.
Copy the one you want into `site/` before running it — Node resolves
`playwright` from `site/node_modules`, so invoking either by its path from the
repo root fails with MODULE_NOT_FOUND.

```bash
cd site
npm install --no-save playwright
npm run build && npm run start &          # production build on :3000
cp ../bluesky/qa/page-check.mjs . && node page-check.mjs; rm page-check.mjs
```

## `page-check.mjs`

Loads the page at 1440, 1024, 768 and 375, forces every lazy image to decode,
then reports horizontal overflow, console errors and failed image requests, and
writes full-page and above-the-fold screenshots to the scratch directory.

Forcing the images matters: a plain `fullPage` screenshot leaves lazily-loaded
images blank because they never entered the viewport, which looks exactly like
a broken image and sends you hunting for a bug that isn't there.

Expected output:

```
desktop  1440x900  overflowX=0
laptop   1024x800  overflowX=0
tablet   768x1024  overflowX=0
mobile   375x812   overflowX=0
ERRORS: none
```

Any non-zero `overflowX` means something is pushing the page sideways on that
width — usually a fixed width, a long unbroken string, or a colour/display
utility passed through `className` that lost a cascade fight with a component's
own base classes.

## `contrast-check.mjs`

Walks every text node on the running site, resolves the real composited
background behind it, and reports anything that fails WCAG AA.

It resolves colours through a canvas rather than parsing the computed style
string. That matters: Tailwind 4 returns colours as `oklab(...)`, and a naive
regex parser reads those numbers as RGB and invents failures that aren't there.

```bash
cp ../bluesky/qa/contrast-check.mjs . && node contrast-check.mjs; rm contrast-check.mjs
```

Expected output:

```
desktop: all text passes WCAG AA
mobile: all text passes WCAG AA
```

Run it after any colour change. It catches the failure mode that is invisible
in code review — text rendered in the same colour as the surface behind it.
