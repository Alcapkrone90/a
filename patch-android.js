const fs=require('fs');const p='android/app/src/main/AndroidManifest.xml';
let x=fs.readFileSync(p,'utf8');
if(!x.includes('screenOrientation'))x=x.replace('<activity','<activity android:screenOrientation="sensorLandscape"');
fs.writeFileSync(p,x);console.log('Querformat gesetzt');
