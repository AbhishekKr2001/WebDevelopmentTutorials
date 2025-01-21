async function abhi() {
    let delhi = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("delhi weather is 23deg centigrade")

        }, 5000)
    })
    let bang = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("currently banglore temp is 3 deg centeigrade")
        }, 2000)

    })
    let delhiw = await delhi
    let bangw = await bang

    return [delhiw, bangw]
}



console.log("WELCOME TO THE WEATHER REPORT OF INDIA")
let a = abhi()
a.then((value) => {
    console.log(value)
})
//await can be used inside async functions only