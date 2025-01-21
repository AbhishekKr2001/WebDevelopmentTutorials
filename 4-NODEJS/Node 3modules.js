const fs = require("fs");//fs module to access physical file system
let text = fs.readFileSync("Abhishek.txt","utf-8");//reading from abhishek file
console.log(text)
text = text.replace("Abhishek","rohan");//replacing the text
fs.writeFileSync("rohan.txt",text)// creating a new file