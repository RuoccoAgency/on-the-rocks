const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

const effettiReplacement = `            {
                name: "Effetti Speciali",
                items: [],
                image: "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.30.jpeg",
                gallery: [
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.30.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31 (1).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31 (2).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31 (3).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.32.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.33 (1).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.33.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.36.jpeg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"Effetti Speciali",\s*items:\s*\[\],\s*\},/, "\n" + effettiReplacement.trim());


const invitiReplacement = `            {
                name: "Inviti e Partecipazioni",
                items: [],
                image: "/inviti%20e%20partecipazioni/Copia di IMG-20260411-WA0039.jpg",
                gallery: [
                    "/inviti%20e%20partecipazioni/Copia di IMG-20260411-WA0039.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0026.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0028.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0035.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0038.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0044.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0084.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"Inviti e Partecipazioni",\s*items:\s*\[\],\s*\},/, "\n" + invitiReplacement.trim());


const cerimoniaReplacement = `            {
                name: "Allestimento Cerimonia",
                items: [],
                image: "/allestimento%20cerimonia/Copia di IMG-20260411-WA0055.jpg",
                gallery: [
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0055.jpg",
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0060.jpg",
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0065.jpg",
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0086.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0027.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0029.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0032.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0034.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0036.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0040.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0041.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0042.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0043.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0045.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0046.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0051.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0112.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0113.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0114.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"Allestimento Cerimonia",\s*items:\s*\[\],\s*\},/, "\n" + cerimoniaReplacement.trim());


fs.writeFileSync(file, code);
console.log('Added 3 new galleries successfully.');
