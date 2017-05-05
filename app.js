console.log("Starting app.js");

//Third party packages
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Local packages
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
//Argv=arguments array
console.log('Command:', command);
console.log('Process',process.argv);
console.log('Yargs', argv);

//condition to add new note
if(command === 'add'){
	console.log('Adding new note!');
	notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
	console.log('Listing all notes');
}else if(command === 'read'){
	console.log('Fetching note!');
}else if(command === 'delete'){
	console.log('Deleting note!');
}else{
	console.log('Command not recognized');
}