const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'client/src/data/services.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace single image URLs from unsplash
content = content.replace(/\n\s*image:\s*"https:\/\/images\.unsplash\.com[^"]*",?/g, '');

// Replace gallery arrays containing only unsplash URLs
content = content.replace(/\n\s*gallery:\s*\[\s*(?:"https:\/\/images\.unsplash\.com[^"]*",?\s*)+\]/g, '');

// If there are trailing commas left on the line before the deleted one, it's fine because it's a JS object, 
// wait, TS/JS allows trailing commas, but we might leave items: [], without anything after it which is also fine.
// Actually, if we deleted the last item, the previous item might have a trailing comma, which is perfectly valid in JS/TS objects.

fs.writeFileSync(filePath, content);
console.log('Done replacing Unsplash URLs.');
