//DIFFERENCE BETWEEN VAR AND LET


let a = "Abhishek"
{
    let a = "This is also a"
    console.log(a);
}
console.log(a);//



var b = "This is a var"
{
    var b = "This is var inside braces"
    console.log(b)
}
console.log(b);
// This is also a
// Abhishek
// This is var inside braces
// This is var inside braces