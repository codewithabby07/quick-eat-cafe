const https = require('https');
const fs = require('fs');

async function testFetch() {
  const shortcode = 'DLusPjQSkWa';
  
  // Try instagram embed page to extract mp4
  const url = 'https://www.instagram.com/p/' + shortcode + '/embed/captioned/';
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Embed response length:', data.length);
      fs.writeFileSync('embed.html', data);
      const mp4s = [...data.matchAll(/https:[^\"\'<>\s]+?\.mp4[^\"\'<>\s]*/g)].map(m => m[0].replace(/\\u0026/g, '&'));
      console.log('MP4 matches in embed:', mp4s.length);
      if (mp4s.length > 0) {
        console.log('Found MP4:', mp4s[0]);
        fs.writeFileSync('reel-video-url.txt', mp4s[0]);
      }
    });
  });
}

testFetch();
