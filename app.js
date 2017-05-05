console.log("Starting app.js");

//Third party packages
const fs = require('fs');
const _ = require('lodash');

//Local packages
const notes = require('./notes.js');

var command = process.argv[2];
//Argv=arguments array
console.log('Command:', command);

//condition to add new note
if(command === 'add'){
	console.log('Adding new note!');
}else if(command === 'list'){
	console.log('Listing all notes');
}else if(command === 'Read'){
	console.log('Fetching note!');
}else if(command === 'Delete'){
	console.log('Deleting note!');
}else{
	console.log('Command not recognized');
}