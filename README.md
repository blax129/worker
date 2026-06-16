# Remote Rental Listing Assistant — Landing Page

A simple, shareable landing page based on the hiring flier.

**Live site:** https://privatepropertygroups.com

Use that full link when posting on Facebook or other social platforms.

## Quick preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy (free options)

### Netlify (GitHub connected)
Push to `main` — `netlify.toml` publishes from the repo root automatically.

### Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this project folder onto the page
3. Copy your new URL (e.g. `https://your-site.netlify.app`)

### GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages → Deploy from branch**
3. Select `main` and `/ (root)`
4. Your site will be at `https://yourusername.github.io/repo-name`

### Vercel
```bash
npx vercel
```

## Share on Facebook

Facebook often **does not make bare domains clickable** in comments (for example `property-management.group` without `https://`).

When posting in comments:

1. Copy the link from the **Share on Facebook** box in the page footer (includes `https://`)
2. Paste it **on its own line** in the comment
3. If it still does not link, add a space before the URL and delete it to retrigger Facebook

The site injects full Open Graph URLs on Netlify deploy so link previews work when Facebook does detect the URL.

## Custom domain (optional)

Point a subdomain like `jobs.property-management.group` to your hosting provider for a branded link.

## Contact info (matches flier)

- **Phone:** (513) 628-6294
- **Email:** support@property-management.group
- **Organization:** [property-management.group](https://property-management.group)
