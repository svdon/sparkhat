# Deploy (free GitHub Pages)

Site builds from `main` via GitHub Actions → GitHub Pages.

## One-time: SiteGround DNS

Keep MX / SPF / DMARC / DKIM / Google verification as they are.

**Update only web records:**

### Apex `sparkhat.com` (A records)

Delete the current A record pointing to `34.174.120.84`.

Add these four A records (Name = `@` or `sparkhat.com`):

| Type | Name | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

### `www` (CNAME)

Change the `www` CNAME from CloudFront to:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | `svdon.github.io` |

## After DNS

1. GitHub → repo **Settings → Pages**
2. Custom domain: `sparkhat.com`
3. Enable **Enforce HTTPS** once the certificate is ready
4. Wait for DNS (often under an hour)

Preview without custom domain: `https://svdon.github.io/sparkhat/` (only if base path is set; with custom domain we use `/`).
