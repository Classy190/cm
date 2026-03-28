const fm = require('gray-matter');
const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(),'markdown','blogs');
let errors=[];
for(const f of fs.readdirSync(dir)){
  if(f.endsWith('.mdx')){
    const fullPath=path.join(dir,f);
    const txt=fs.readFileSync(fullPath,'utf8');
    try{
      fm(txt);
    }catch(e){
      errors.push({file:f,error:e.message});
    }
  }
}
console.log('checked', fs.readdirSync(dir).filter(f=>f.endsWith('.mdx')).length, 'files');
for(const err of errors) console.log(err.file, err.error);
