# Tasneem — Website

Static bilingual (English / العربية) welcome page.

## Files
- `index.html` — welcome page
- `styles.css` — styles (light/dark, RTL aware)
- `main.js` — language toggle (remembers choice)
- `404.html` — not-found page
- `_headers` — Cloudflare Pages response headers
- `favicon.svg` — icon

## Deploy on Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Pick the `eng` repo, branch `main`.
3. Framework preset: **None**. Build command: *(leave empty)*. Build output directory: `/`.
4. Save and Deploy. Every push to `main` redeploys.

## Local preview
Open `index.html` in a browser, or run `npx serve .`
