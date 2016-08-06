"use strict";

Homey.log("entering driver.js");

var HomeyRadio = require('homey-arduinodriver');
var devices = {};
var interval = {};

module.exports.pair = function(socket) {
  Homey.log("init in driver.js started");
  devices_data.forEach(initDevice);
  callback(null, true);
};
