const fs = require('fs');
const html = fs.readFileSync('embed.html', 'utf8');

const videoTags = [...html.matchAll(/<video[^>]*>/gi)].map(m => m[0]);
console.log('Video tags in embed:', videoTags);

const matches = [...html.matchAll(/\"(https:[^\"]+?)\"/g)].map(m => m[1]).filter(u => u.includes('cdninstagram') && (u.includes('.mp4') || u.includes('video') || u.includes('bytestream')));
console.log('Matches:', matches.slice(0, 5));
