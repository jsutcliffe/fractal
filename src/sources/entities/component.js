/**
 * Module dependencies.
 */

var Promise     = require('bluebird');
var _           = require('lodash');

var mixin       = require('./entity');

/*
 * Export the component.
 */

module.exports = Component;

/*
 * Group constructor.
 *
 * @api private
 */

function Component(){
    this.type = 'component';
};

mixin.call(Component.prototype);
