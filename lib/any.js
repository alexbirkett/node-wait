/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = require('util'),
    events = require('events');

var WaitForMultiple = require('./multiple');

function WaitForAny(options) {
    WaitForMultiple.call(this, options);
}
util.inherits(WaitForAny, WaitForMultiple);

WaitForAny.prototype.handleDone = function(index) {
    this.stopListening();
    this.emit('done', index);
    this.clear();
};

module.exports = WaitForAny;
