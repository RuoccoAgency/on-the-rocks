const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

const replacement = `            {
                name: "Allestimento Sala",
                items: [],
                image: "/Allestimento%20sala/IMG-20260411-WA0018.jpg",
                gallery: [
                    "/Allestimento%20sala/IMG-20260411-WA0018.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0026.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0044.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0056.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0057.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0058.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0066.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0067.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0068.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0086.jpg"
                ]
            },`;

// We use regex to match the exact block disregarding exact whitespaces
code = code.replace(/\{\s*name:\s*"Allestimento Sala",\s*items:\s*\[\],\s*\},/, replacement.trim());

fs.writeFileSync(file, code);
console.log('Replaced Allestimento Sala successfully.');
