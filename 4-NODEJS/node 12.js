//HOW TO WORK WITH EVENTS


var events = require('events')

var eventEmitter = new events.EventEmitter();//creation of the eventEmitter object

var myeventhandler = function () {
    console.log("I HAVE HEARD A SCREEMING SOUND RIGHT  NOW")
}
var myeventhandler1 = function () {
    console.log("I HAVE HEARD A BARKING SOUND RIGHT  NOW")
}

eventEmitter.on('scream', myeventhandler)
eventEmitter.on('bark', myeventhandler1)

eventEmitter.emit('bark')
eventEmitter.emit('scream')   //emitter should always be placed after the handler
