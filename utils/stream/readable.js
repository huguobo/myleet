// const { Readable } = require('stream');
// const rs = new Readable;
// rs.push('aa');
// rs.push('bb');
// rs.push(null);

// rs.pipe(process.stdout);


var Readable = require('stream').Readable;
var c = 97;

var rs = new Readable({
  read: function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
}});

rs.pipe(process.stdout);
