let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this promise is  1")
        resolve(1)
    }, 5000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this promise is 2")
        reject(new Error("we got some error"))
        // resolve(02)
    }, 3000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this promise is 3")
        resolve(3)
    }, 3000)
})

//PROMISE.ALL GETS EXECUTED WHEN ALL THE PROMISES ARE RESOLVED (EVEN IF ONE GET REJECTED IT WILL NOT GET EXECUTED)
// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value)
// })


//PROMISE.ALLSETTLED GETS EXECUTED EVEN IF ONE GET REJECTED
let promise_all = Promise.allSettled([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})


//PROMISE.RACE GETS EXECUTED WHEN ALL THE PROMISES ARE RESOLVED (EVEN IF ONE GET REJECTED IT WILL NOT GET EXECUTED)
//RACES FOR 1ST POSITION
// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value)
// })

//PROMISE.ANY GETS EXECUTED EVEN IF ONE GET REJECTED
//RACES FOR 1ST POSITION
// let promise_all = Promise.any([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value)
// })