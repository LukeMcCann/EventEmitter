'use strict';

// Create an Emitter constructor function
function Emitter() {
    this.events = {};
}

// listener  - the code that responds to the event, if we had
// multiple listeners they would be invoked sequentially (in order) in JS. 
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener); // create a new property on the object
                                      // ensure the property is an array
                                      // add our listener functions to the array
}

// Emit - An event happened, whoevers listening can respond
Emitter.prototype.emit = function(type) {
    // if property of type exists on the object
    if (this.events[type]) {
        // loop over the events array
        this.events[type].forEach(function(listener) {
            listener(); // invoke the listener function
        });
    }
}

module.exports = Emitter;