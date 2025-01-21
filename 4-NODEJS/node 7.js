//OPENING OF THE FILE

var fs = require('fs');
fs.open("sample.txt", 'w', function (err, file) {
    if (err) throw err;
    console.log("File is opened for writing");
});


// THE CONTENT IS WRITTEN INSIDE IT(THE PREVIOUS TEXT INSIDE THE FILE GETS REPLACED)

// var fs = require('fs');
fs.writeFile('sample.txt', 'HI I AM THE PERSON THAT IS BEING TALKED ABOUT AND HERE I AM', function (err) {
    if (err) throw err;
    console.log("Content written in the file")
});



//HOW TO APPEND LINES IN A FILE

// var fs = require('fs');
fs.appendFile('sample.txt', '\nHELLO THIS IS JUST A WISHFUL THINKING', function (err) {
    if (err) throw err;
    console.log("File appended")
});



//TO READ FILE AND DISPLAY THE CONTENT

// var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function (err, data) {   //IT TAKES ENCODING TO DISPLAY CONTENT IN THE CONSOLE
    if (err) throw err;
    console.log("Data is being read from the file");
    console.log(data);
});



