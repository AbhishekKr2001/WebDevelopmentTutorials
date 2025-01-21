try {
    console.log(rahul)
}
catch (error) {
    // console.log(error)


    error.status = 405
    alert(error.name)
    alert(error.message)
    alert(error.status)

}

