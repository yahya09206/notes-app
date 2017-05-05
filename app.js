console.log("Starting app.js");

//Third party packages
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Local packages
const notes = require('./notes.js');

var command = process.argv[2];
//Argv=arguments array
console.log('Command:', command);
console.log(process.argv);

//condition to add new note
if(command === 'add'){
	console.log('Adding new note!');
}else if(command === 'list'){
	console.log('Listing all notes');
}else if(command === 'read'){
	console.log('Fetching note!');
}else if(command === 'delete'){
	console.log('Deleting note!');
}else{
	console.log('Command not recognized');
}