const path = require('node:path');
const fs = require ('node.fs');

const notes = 'C:\Users\jovan\Desktop\BED\week1\express\Week 1\Practical 1\file\notes.txt';

path.dirname(notes);
path.basename(notes);
path.extname(notes);

fs.readFile('C:\Users\jovan\Desktop\BED\week1\express\Week 1\Practical 1\file\notes.txt','utf8',(err,data) =>{
    if (err){
        console.error(err);
        return;
    }
    console.log(chalk.blue(data));
});

const content = 'Some Content!'
fs.writeFile('C:\Users\jovan\Desktop\BED\week1\express\Week 1\Practical 1\file\test.txt',content,err => {
    if (err){
        console.error(err);       
    } else {
        console.log(chalk.green("file written successfully"));
    }
});