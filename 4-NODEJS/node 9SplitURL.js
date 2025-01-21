//THE URL MODULE
//URL MODULE SPLITS THE WEB ADDRESS INTO READABLE PARTS

var url = require('url');
var add = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(add, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);
