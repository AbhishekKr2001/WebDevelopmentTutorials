
//TO SET COOKIES
let key = prompt("enter your key")
let value = prompt("enter the value U want to set")

document.cookie = `${encodeURIComponent(key)} =${encodeURIComponent(value)}`


//TO DECODE COOKIES
decodeURIComponent("encoded string")