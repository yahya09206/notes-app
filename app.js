console.log("Starting app.js");

//Third party packages
const fs = require('fs');
const _ = require('lodash');

//Local packages
const notes = require('./notes.js');

var command = process.argv[2];
//Argv=arguments array
console.log('Command:', command);