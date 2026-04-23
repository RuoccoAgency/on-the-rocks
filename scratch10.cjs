const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

// replace literal \n with actual newlines
code = code.replace(/\\n/g, '\n');

fs.writeFileSync(file, code);
console.log('Fixed literal \\n in services.ts');
