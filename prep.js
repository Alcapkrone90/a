const fs=require('fs'),path=require('path');
fs.mkdirSync('www',{recursive:true});
fs.copyFileSync('src/index.html','www/index.html');
fs.copyFileSync(path.join('node_modules','three','build','three.min.js'),'www/three.min.js');
fs.copyFileSync(path.join('node_modules','peerjs','dist','peerjs.min.js'),'www/peerjs.min.js');
console.log('www/ fertig (auch als Webversion hostbar)');
