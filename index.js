const fs = require('fs');

const hello = 'Hello World!';
console.log(hello);

const textIn = fs.readFileSync('txt/input.txt', 'utf8');
console.log(textIn);

const textOut = `This is what we know about avacado : ${textIn}.\nCreated on ${Date.now()}`;
console.log(textOut);
fs.writeFileSync('txt/output.txt', textOut)
console.log('File Write Success !');