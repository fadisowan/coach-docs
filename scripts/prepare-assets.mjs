import fs from 'node:fs';
import path from 'node:path';
const destination=path.resolve('public/assets');
if(!destination.startsWith(path.resolve('.')+path.sep))throw Error('Asset path outside repository');
fs.rmSync(destination,{recursive:true,force:true});
fs.mkdirSync('public', { recursive: true });
fs.cpSync('assets', 'public/assets', { recursive: true });
fs.copyFileSync('source-docs/coach-guide-for-chatgpt.md','public/coach-guide-1.76.1.md');
