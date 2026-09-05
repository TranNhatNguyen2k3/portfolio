# Portfolio — Tran Nhat Nguyen

Personal portfolio (Vite + static HTML/CSS/JS).

**Hosting:** Cloudflare (Workers Static Assets) — free.

## Local

```bash
npm install
npm run dev
```

## Cloudflare build settings

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | `npx wrangler deploy` |

`wrangler.toml` đã cấu hình `[assets] directory = "./dist"` nên `wrangler deploy` upload đúng thư mục build.

## Custom domain

Workers/Pages project → **Custom domains** / **Domains** → thêm `nhatnguyen3024.id.vn`.

## Manual deploy (local)

```bash
npm run build
npx wrangler login
npx wrangler deploy
```
