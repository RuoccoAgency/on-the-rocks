const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'client/src/data/services.ts');
let code = fs.readFileSync(file, 'utf8');

const newCategory = `    {
        name: "18 ANNI",
        slug: "18-anni",
        subcategories: [
            {
                name: "Festa dei 18 Anni - Organizzazione Completa",
                items: [],
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Allestimento Location",
                items: [],
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Dj Set & Intrattenimento",
                items: [],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
            }
        ]
    }
];`;

code = code.replace(/\];\s*$/, "\\n" + newCategory + "\\n");

fs.writeFileSync(file, code);
console.log('Added 18 ANNI category');
