//  WHEN PROMISE IS RESOLVED CATCH FUNCTION DOESNOT EXECUTE

let p = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("I am a promise and resolved")
        resolve(876)
    }, 5000)
})

p.then(() => {
    console.log("This promise has been resolved and then function had run")
})
p.then((value) => {
    console.log(`this promise is resolved with this value ${value}`)
})

p.catch((error) => {
    console.log("some error occurred")
})


//  WHEN PROMISE IS REJECTED CATCH FUNCTION IS EXECUTED

// let p = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() => {
//         console.log("I am a promise and I am rejected")
//         reject(new Error("I am an error"))
//     }, 3000)
// })

// p.then((value) => {
//     console.log(value);
//     console.log(".then executed");
// })

// p.catch((error) => {
//     console.log(`some error occurred ${error}`)
// })