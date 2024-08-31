// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Define your URLs here
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add other pages here
];

const stream = new SitemapStream({ hostname: 'https://www.erelys.com' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
});
