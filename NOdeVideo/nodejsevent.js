const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Turn Off!');
    setTimeout(() => {
        console.log("Turn OFf ASAP")
    }, 3000);
});
myEmitter.emit('WaterFull');
// myEmitter.emit('event');