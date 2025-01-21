console.log("THIS IS TUTORIAL OF FUNCTION");

//this is a basic function
function greet(name) {
    console.log(name + " is a good boy")
}


let name1 = "harry";
let name2 = "rohan";
let name3 = "shyam";
let name4 = "sundar";

greet(name1);
greet(name2);
greet(name3);
greet(name4);

//this is an arrow function
let motto = (name) => {
    console.log(`${name} is a culprit`);
}
motto(name1);
motto(name2);
motto(name3);
motto(name4);