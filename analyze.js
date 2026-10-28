const fs = require('fs');
let html = fs.readFileSync('clean-reference.html', 'utf8');

// Look for carousel markup
const carouselMatch = html.match(/<div class=\"relative aspect-\[4\/5\][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
console.log('Carousel markup sample:');
console.log(carouselMatch ? carouselMatch[0].slice(0, 1000) : 'NOT FOUND');
