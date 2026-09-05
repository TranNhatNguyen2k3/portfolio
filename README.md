# Portfolio — Tran Nhat Nguyen

Personal portfolio (Vite + static HTML/CSS/JS).

**Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) — free, long-term, global CDN.

## Local

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

### Build settings (quan trọng)

Trong project Pages → **Settings** → **Builds & deployments**:

| Setting | Value |
|--------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | `npx wrangler pages deploy dist` |

> Bắt buộc có Deploy command: dùng **`npx wrangler pages deploy dist`** — không dùng `npx wrangler deploy` (Workers).

### First time

1. Push repo lên GitHub (`main`).
2. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Chọn repo, điền build settings như bảng trên → **Save and Deploy**.

URL: `https://<project>.pages.dev`. Mỗi `git push` lên `main` sẽ auto-redeploy.

### Custom domain

Pages → **Custom domains** → thêm domain → trỏ DNS (Mat Bao / Cloudflare).

### Manual deploy (máy local, optional)

```bash
npm run build
npx wrangler login
npx wrangler pages deploy dist --project-name=tran-nhat-nguyen
```

## Build only

```bash
npm run build
npm run preview
```
