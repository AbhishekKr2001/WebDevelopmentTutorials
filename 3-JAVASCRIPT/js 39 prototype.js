//JS OBJECET  HAS A SPECIAL PROPERTY CALLED PROTO THAT IS EITHER NULL OR REFERENCES  ANOTHER OBJECT
let a = {//2
    name1: "abhishek",
    lang: "english",
    run: () => {
        alert("self run")
    }
}

console.log(a)

let p = {//4
    run: () => {
        alert("this is run function of p")
    }
}

a.__proto__ = p//3
// a.run()//self run will execute

p.__proto__ = {//5
    name2: "this is jackie dada"
}

console.log(a.name2)//1