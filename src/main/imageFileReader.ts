
import fs from 'fs';

import path from 'path'


const app = require('electron').app

console.log('Init fileReaderFile')
let sAppPath = app.getAppPath()
let last = path.basename(sAppPath)
console.log('last: ' + sAppPath)
if (last.search('.asar') > -1) {
  sAppPath = path.dirname(app.getPath('exe'))
}
sAppPath = path.join(sAppPath, 'database');
console.log('Path to app: ' + sAppPath)

function aListImages(){
  console.log('List files')

  let files = fs.readdirSync(sAppPath);
  files = files.filter((fileName)=> fileName.endsWith('.bmp'));
  return files;
}

function  aReadImageFile(sFileName:string){
  console.log('Read file')
  let aFileContent 
  const filePath = path.join(sAppPath,sFileName);
  if(fs.existsSync(filePath)){
    aFileContent = fs.readFileSync(filePath);
  }
  return aFileContent;
}



const fileReader = {aListImages,aReadImageFile};

export default fileReader;