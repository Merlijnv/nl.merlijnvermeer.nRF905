"use strict"

function init() {
  Homey.log("nl.merlijnvermeer.nRF905 running....");
}

//// bind flow action
//Homey.manager('flow').on('action.message_receive', function( callback, args ){
//  callback( null, )
//});
//
//function message_receive(rec_address) {
//  var HomeyRadio = require('homey-arduinodriver');
//  var radio = new HomeyRadio({address: 0x50});
//  radio.on('payload', function(message) {
//    console.log(message);
//  });
//}
//
//function specific_message_receive(message rec_address) {
//  var HomeyRadio = require('homey-arduinodriver');
//  var radio = new HomeyRadio({address: 0x50});
//
//}
//
//function message_send(message_address) {
//  var HomeyRadio = require('homey-arduinodriver');
//  var radio = new HomeyRadio({address: 0x50});
//
//}











module.exports.init = init;
