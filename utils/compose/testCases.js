var compose = require('./index');

var head = arr => arr && arr[0];
var reverse = arr => (arr || []).reverse();
var last = compose(head, reverse);

var input = [1, 2, 3];
var expect = 3;

var output = last(input);
console.log('compose is passed?', expect === output);
module.exports = expect === output;
