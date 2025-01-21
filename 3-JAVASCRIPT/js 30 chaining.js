let p = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am resolved")
        resolve(87)
    }, 2000)
})

p.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(90)
        }, 2000)
    })
}).then((value) => {
    console.log(value);
    console.log("we are done")

    return 2;
}).then((value) => {
    console.log(value);
    console.log("now we are pakkka done")
})