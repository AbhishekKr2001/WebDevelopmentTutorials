let p = fetch('http://example.com/movies.json')
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)

    return response.json
}).then((value2) => {
    console.log(".then function is executed")
    console.log(value2)
})