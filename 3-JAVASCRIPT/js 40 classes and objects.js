// class railwayform {
//     submit() {
//         alert("this form is submitted")
//     }
//     cancel() {
//         alert("this form is cancelled")
//     }
// }

// let harry = new railwayform()
// let abhishek = new railwayform()


// harry.submit()
// abhishek.submit()
// abhishek.cancel()


//CONSTRUCTOR

class example {
    constructor(_name1, language) {
        this.name1 = _name1
        this.lang = language
    }
    run() {
        console.log("the name is " + this.name1)
        console.log("the language is " + this.lang)

    }
}
let abhi = new example('TheKing', "English")
abhi.run()