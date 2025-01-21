//2
function loadscripts(src, callback) {

    var script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("loadscript loaded")
        callback(null, src)
    }
    script.onerror = function (error) {

        console.log("error loading")
        callback(new error("src got some error"))
    }
    document.body.appendChild(script)
}

//3
function hello(error, src) {
    if (error) {
        console.log(error)
        return;
    }
    alert("HELLO THIS IS A CALLBACK FUNCTION AND THE SCRIPT IS LOADED SUCCESSFULLY")
}

//1
loadscripts("https://code.jquery.com/jquery-3.3.1.slim.min.js", hello)