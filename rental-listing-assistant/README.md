# Remote Rental Listing Assistant — Landing Page

A simple, shareable landing page based on the hiring flier. Use the deployed URL as the link caption whenever you post the flier online.

## Quick preview

```bash
cd rental-listing-assistant
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy (free options)

### Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `rental-listing-assistant` folder onto the page
3. Copy your new URL (e.g. `https://your-site.netlify.app`)

### GitHub Pages
1. Push this folder to a GitHub repo
2. Go to **Settings → Pages → Deploy from branch**
3. Select `main` and `/ (root)`
4. Your site will be at `https://yourusername.github.io/repo-name`

### Vercel
```bash
npx vercel --cwd rental-listing-assistant
```

## Custom domain (optional)

Point a subdomain like `jobs.property-management.group` to your hosting provider for a branded link.

## Contact info (matches flier)

- **Phone:** (513) 628-6294
- **Email:** support@property-management.group
- **Organization:** [property-management.group](https://property-management.group)
