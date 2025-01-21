//TO DELETE FILES FROM THE FOLDER
var fs = require('fs');
// fs.unlink('sample.txt', function (err) {
//     if (err) throw err;
//     console.log('File has been magically removed');
// });


//TO REMAME A FILE

fs.rename('sample.txt', 'example.txt', function (err) {
    if (err) throw err;
    console.log('File has been renamed from sample to example by THE GREAT ABHSIHEK KUMAR');
});