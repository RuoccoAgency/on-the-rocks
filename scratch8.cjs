const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

code = code.replace(/,\\n                image:/g, ',\n                image:');

fs.writeFileSync(file, code);
console.log('Fixed syntax error in services.ts');
