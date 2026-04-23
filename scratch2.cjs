const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

code = code.replace(/\n\s*image:\s*".*?",?/g, '');
code = code.replace(/\n\s*gallery:\s*\[.*?\],?/gs, '');

fs.writeFileSync(file, code);
console.log('Removed all photos.');
