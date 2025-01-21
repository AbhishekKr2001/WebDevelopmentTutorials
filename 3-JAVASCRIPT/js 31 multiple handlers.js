let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this promise is resolved")
        resolve(98)
    }, 3000)
})

p1.then((value) => {
    console.log(value)
    console.log("this is first .then")
})

p1.then(() => {
    console.log("this is second .then")
})
p1.then(() => {
    console.log("this is third .then")
})