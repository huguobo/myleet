const stream = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('input.txt',{ encoding:'utf-8' });
let body = '';

readStream.on('data', function(chunk){
  body += chunk;
  console.log('chunk is:', chunk);
});
readStream.on('end',function(){
  console.log('end');
})

readStream.pipe(fs.createWriteStream('newInput.txt'));
