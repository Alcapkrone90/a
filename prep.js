const fs = require('fs'), path = require('path');
const src = ['src/index.html', 'index.html'].find(f => fs.existsSync(f));
if (!src) {
  console.log('Dateien im Repository:', fs.readdirSync('.'));
  throw new Error('index.html wurde nicht gefunden');
}
fs.mkdirSync('www', { recursive: true });
fs.copyFileSync(src, 'www/index.html');
fs.copyFileSync(path.join('node_modules', 'three', 'build', 'three.min.js'), 'www/three.min.js');
fs.copyFileSync(path.join('node_modules', 'peerjs', 'dist', 'peerjs.min.js'), 'www/peerjs.min.js');
console.log('www/ fertig, verwendet:', src);
