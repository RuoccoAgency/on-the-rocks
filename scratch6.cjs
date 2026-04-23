const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

const tortaReplacement = `            {
                name: "Allestimento Taglio Torta",
                items: [],
                image: "/taglio%20torta/Copia di IMG-20260411-WA0055.jpg",
                gallery: [
                    "/taglio%20torta/Copia di IMG-20260411-WA0055.jpg",
                    "/taglio%20torta/Copia di IMG-20260411-WA0060.jpg",
                    "/taglio%20torta/IMG-20260411-WA0034.jpg",
                    "/taglio%20torta/IMG-20260411-WA0036.jpg",
                    "/taglio%20torta/IMG-20260411-WA0045.jpg",
                    "/taglio%20torta/IMG-20260411-WA0046.jpg",
                    "/taglio%20torta/IMG-20260411-WA0051.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"Allestimento Taglio Torta",\s*items:\s*\[\],\s*\},/, "\n" + tortaReplacement.trim());


const folkReplacement = `            {
                name: "FOLK E POPOLARE",
                items: ["Musicastoria", "I Valcalore", "Kiepò"],
            },`;
code = code.replace(/\{\s*name:\s*"FOLK E POPOLARE",\s*items:\s*\["Musicastoria",\s*"I Valcalore",\s*"Kiepò"\],[\s\S]*?\},/, "\n" + folkReplacement.trim());

fs.writeFileSync(file, code);
console.log('Done.');
