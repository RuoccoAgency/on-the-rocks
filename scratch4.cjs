const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

const audioLuciReplacement = `            {
                name: "Noleggio e montaggio scenografie e luci architetturali",
                items: [],
                image: "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0056.jpg",
                gallery: [
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0056.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0057.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0059.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0060.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0061.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0062.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0063.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0066.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0067.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0068.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0069.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0070.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0071.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"Noleggio e montaggio scenografie e luci architetturali",\s*items:\s*\[\],\s*\},/, "\n" + audioLuciReplacement.trim());


const djSetReplacement = `            {
                name: "Dj Set - Animazione",
                items: [],
                image: "/dj%20set%20animazione/IMG-20260411-WA0005.jpg",
                gallery: [
                    "/dj%20set%20animazione/IMG-20260411-WA0005.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"Dj Set - Animazione",\s*items:\s*\[\],\s*\},/, "\n" + djSetReplacement.trim());


const liveShowReplacement = `            {
                name: "LIVE SHOW",
                items: ["NaltroSound", "Unusual Live Band"],
                image: "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0003.jpg",
                gallery: [
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0003.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0004.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0009.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0010.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0011.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0012.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0033.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260416-WA0064.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"LIVE SHOW",\s*items:\s*\["NaltroSound",\s*"Unusual Live Band"\],\s*\},/, "\n" + liveShowReplacement.trim());


const folkReplacement = `            {
                name: "FOLK E POPOLARE",
                items: ["Musicastoria", "I Valcalore", "Kiepò"],
                image: "/Folk%20e%20Popolare/IMG-20260411-WA0052.jpg",
                gallery: [
                    "/Folk%20e%20Popolare/IMG-20260411-WA0052.jpg",
                    "/Folk%20e%20Popolare/IMG-20260411-WA0060.jpg",
                    "/Folk%20e%20Popolare/IMG-20260411-WA0110.jpg",
                    "/Folk%20e%20Popolare/IMG-20260411-WA0115.jpg"
                ]
            },`;
code = code.replace(/\{\s*name:\s*"FOLK E POPOLARE",\s*items:\s*\["Musicastoria",\s*"I Valcalore",\s*"Kiepò"\],\s*\},/, "\n" + folkReplacement.trim());

fs.writeFileSync(file, code);
console.log('Added 4 new galleries successfully.');
