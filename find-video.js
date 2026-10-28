const fs = require('fs');
const html = fs.readFileSync('crawler.html', 'utf8');

const metas = [...html.matchAll(/<meta\s+(?:property|name)=[\"\']([^\"\']+)[\"\']\s+content=[\"\']([^\"\']+)[\"\']/gi)].map(m => m[1] + ' = ' + m[2]);
console.log('Crawler Metas count:', metas.length);
console.log(metas.slice(0, 15));

// Check if any video url exists
const videoMatches = html.match(/https:[^\"\'<>\s]+?\.(?:mp4|webm)[^\"\'<>\s]*/gi);
console.log('Video matches in crawler.html:', videoMatches ? videoMatches.length : 0);
if (videoMatches) {
  console.log('First video URL:', videoMatches[0].replace(/\\u0026/g, '&'));
}
