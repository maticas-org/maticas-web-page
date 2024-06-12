const fs = require('fs');
const urls = [
  '/es',
  '/es/blog',
  '/es/blog/vpd',
  '/es/contactanos',
  '/es/servicios/registrador-de-datos'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>https://www.maticastech.com${url}</loc>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap_es.xml', sitemap);
