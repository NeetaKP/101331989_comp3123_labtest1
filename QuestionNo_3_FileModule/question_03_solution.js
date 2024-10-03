const fobj = require('fs')
const{ chdir }= require('process');
const pathObj = require('path');
const removeLogFiles = function(){
    const logDirectory = __dirname + "/log";
    if(fobj.existsSync(logDirectory)){
        const flist = fobj.readdirSync(logDirectory);
        for(let i=0; i<flist.length;i++){
            fobj.unlinkSync(logDirectory + '/'+ flist[i]);
            console.log(`delete files...${flist[i]}`);
        }
        fobj.rmdirSync(logDirectory);
    }
}
const createlogFiles = function(){
    const logDirectory = __dirname + "/log";
    if(!fobj.existsSync(logDirectory)){
        fobj.mkdirSync(logDirectory);
        console.log("Log directory created")
    }
    chdir(logDirectory);
        for(let i=0; i<10; i++){
            fobj.writeFileSync(`log${i}.txt`, `my name is Neeta-${i}`);
            console.log(`log ${i}.txt`);

        }
    
}

//createlogFiles();
removeLogFiles();