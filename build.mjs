import fs from 'fs';

const siteUrl = (
  process.env.SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'https://privatepropertygroups.com'
).replace(/\/$/, '');

const ogImage = `${siteUrl}/assets/hero-house.png`;
let html = fs.readFileSync('index.html', 'utf8');

html = html
  .replace(/https:\/\/privatepropertygroups\.com/g, siteUrl)
  .replaceAll('__SITE_URL__', siteUrl)
  .replaceAll('__OG_IMAGE__', ogImage);

fs.writeFileSync('index.html', html);
console.log(`Site URL set to ${siteUrl}`);
