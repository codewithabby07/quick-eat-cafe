const fs = require('fs');
const html = fs.readFileSync('crawler.html', 'utf8');

const match = html.match(/<meta[^>]+(?:twitter:image|og:image)[^>]+content=[\"\']([^\"\']+)[\"\']/i);
if (match) {
  let url = match[1].replace(/&amp;/g, '&');
  console.log('Found image URL:', url);
  fs.writeFileSync('thumb-url.txt', url);
} else {
  console.log('No image found in meta');
}
