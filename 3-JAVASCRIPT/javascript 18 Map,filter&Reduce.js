//Map ,filter and reduce
let arr = [1, 3, 5, 79, 9, 90];
arr.map((value) => {
    console.log(value)
})


let m = arr.filter((a) => {//this is a  method to filter out the elements of an array
    return a > 5
})
console.log(m)


let a = arr.reduce((h1, h2) => {//this method reduce array to a single value
    return h1 + h2
})
console.log(a)


