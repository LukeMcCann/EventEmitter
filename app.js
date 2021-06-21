'use strict';

const Emitter = require('./emitter');

let emtr = new Emitter();

// listen for event 
// greet is the property name on the object which holds all the events.
// The function passed is the listener.
emtr.on('greet', function () {
    console.log('Somewhere, someone said hello');
});

// When we add listeners, they are not really listeners. In reality
// the listeners are simply a function stored inside of an array.
// It is important to remember that events are also simply properties, 
// on an object, we therefore want to keep our event names short and simple.

emtr.on('greet', function() {
    console.log('Another greeting happened!');
});

console.log('Hello!');
emtr.emit('greet'); // emit the event
                    // This can be thought of as 
                    // telling our listeners that an event occurred
                    // in reality, we are adding a property to 
                    // our event named 'greet', and then calling the listener
                    // on that event

// Uncomment to see how this is stored.
// console.log(emtr);