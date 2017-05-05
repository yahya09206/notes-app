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
console.log('Yargs', argv);

//condition to add new note
if(command === 'add'){
	notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
	notes.getAll();
}else if(command === 'read'){
	notes.getNote(title);
}else if(command === 'delete'){
	notes.remove(title);
}else{
	console.log('Command not recognized');
}