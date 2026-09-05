# Portfolio — Tran Nhat Nguyen

Personal portfolio (Vite + static HTML/CSS/JS).

**Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) — free, long-term, global CDN.

## Local

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

### First time

1. Create a GitHub repo and push this folder (`main` branch).
2. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo. Build settings:

| Setting | Value |
|--------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (or leave default) |

4. **Save and Deploy** → live URL like `https://<project>.pages.dev`.

Every push to `main` auto-redeploys.

### Custom domain (optional, free)

Pages project → **Custom domains** → add your domain → follow DNS instructions (best with Cloudflare DNS).

### Manual deploy (no Git)

```bash
npm run build
npx wrangler pages deploy dist --project-name=tran-nhat-nguyen
```

(Requires `npx wrangler login` once.)

## Build only

```bash
npm run build
npm run preview
```
