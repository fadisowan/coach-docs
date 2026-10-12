import fs from 'node:fs';
fs.mkdirSync('public', { recursive: true });
fs.cpSync('assets', 'public/assets', { recursive: true });
